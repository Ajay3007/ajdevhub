# 📘 IPv4 L3 Forwarding Using VPP (DPDK) — Example Setup & Packet Flow

This document explains a simple IPv4 L3 forwarding testbed using:

- A traffic generator (PktGen or similar)

- A VPP router running with DPDK on two physical NIC ports

- VLAN-tagged sub-interfaces

- Static ARP + static route for deterministic forwarding

The goal is to understand how a packet enters VPP, how it is routed (L3 forwarding), and how it leaves via the correct egress interface.

**NOTE:**
This example is based on Dataplane Stack [IPV4 L3 Forwarding VPP](https://dataplane-stack.docs.arm.com/en/nw-ds-2024.03.29/user_guide/l3_forwarding_vpp.html)

Scripts file to run the VPP application can be founde [Here](https://github.com/Ajay3007/ajdevhub/tree/master/src/vpp/l3fwd).
It contains:
- Router
- Traffic Monitor
- stop scripts


## 🖥️ 1. Testbed Overview

```bash
+----------------------+          +-----------------------------------+
|   Traffic Generator  |          |              VPP Router           |
|                      |          |             (DPDK Mode)           |
|  src MAC: AA:AA:AA   |          |                                   |
|                      |          |   +---------------------------+   |
|  Sends traffic  ---> |  --->    |   |    Ethernet0.100 (ingress)|   |
+----------------------+          |   |    MAC: BB:BB:BB          |   |
                                  |   |    IP:  10.0.0.10/32      |   |
                                  |   +-------------+-------------+   |
                                  |                 |                 |
                                  |         IPv4 Lookup /             |
                                  |        Adjacency Rewrite          |
                                  |                 |                 |
                                  |   +-------------+-------------+   |
                                  |   |  Ethernet1.100 (egress)   |   |
                                  |   |  MAC: CC:CC:CC            |   |
                                  |   |  IP:  10.0.0.20/32        |   |
                                  |   +---------------------------+   |
                                  +-----------------------------------+

```



## 📡 2. Dummy Example Values Used

| Component                 | Value                 |
| ------------------------- | --------------------- |
| VLAN ID                   | **100**               |
| TG source MAC             | **AA:AA:AA:AA:AA:AA** |
| VPP ingress MAC           | **BB:BB:BB:BB:BB:BB** |
| VPP egress MAC            | **CC:CC:CC:CC:CC:CC** |
| Next-hop MAC              | **DD:DD:DD:DD:DD:DD** |
| TG source IP              | **192.168.10.10**     |
| Destination IP (to route) | **1.1.1.1**           |
| VPP ingress IP            | **10.0.0.10/32**      |
| VPP egress IP             | **10.0.0.20/32**      |
| Next-hop IP               | **10.0.0.30**         |

## ⚙️ 3. VPP Configuration : Static ARP & Route

Create static ARP entry for next-hop:

```bash
set ip neighbor Ethernet1.100 10.0.0.30 DD:DD:DD:DD:DD:DD
```

Add IPv4 route for the destination:
```bash
ip route add 1.1.1.1/32 via 10.0.0.30 Ethernet1.100
```

This means:

To reach IP 1.1.1.1 →
send to next-hop 10.0.0.30 →
on Ethernet1.100 →
using destination MAC DD:DD:DD:DD:DD:DD.

## 📥 4. Packet Entering VPP (Ingress)

The traffic generator sends:

**Ethernet Header**
```bash
src MAC = AA:AA:AA:AA:AA:AA    (Pktgen)
dst MAC = BB:BB:BB:BB:BB:BB    (MAC of VPP ingress interface Ethernet0.100)
vlan    = 100
```

**IP Header**
```bash
src IP = 192.168.10.10
dst IP = 1.1.1.1        <-- this is very important
```

VPP receives this packet on Ethernet0.100.

## 🔍 5. VPP Routing Decision (FIB Lookup)
VPP removes L2 header and does an IPV4 lookup on:
```bash
dst IP = 1.1.1.1
```

It matches the installed route:
```bash
1.1.1.1/32 via 10.0.0.30 out Ethernet1.100
```
This route tells VPP:
```
“To reach 1.1.1.1 → send to next-hop 10.0.0.30 through Ethernet1.100.”
```

**So VPP selects:**

- Output interface → Ethernet1.100

- Next-hop IP → 10.0.0.30

- Next-hop MAC → DD:DD:DD:DD:DD:DD

This is called Adjacency Rewrite.

## 🔧 6. Adjacency Rewrite (Core of L3 Forwarding)

**VPP performs:**

- TTL decrement: 64 → 63

- IPv4 checksum recompute

- Rewrite the L2 Ethernet header

### New Ethernet (L2) header VPP builds:

```bash
dst MAC = DD:DD:DD:DD:DD:DD     (next-hop MAC)
src MAC = CC:CC:CC:CC:CC:CC     (VPP egress interface MAC Ethernet1.100)
vlan    = 100
```

The IP header does not change (except TTL and checksum).

#### ✔ IMPORTANT:

Even though the packet ENTERED on Ethernet0.100,
it LEAVES using the MAC of Ethernet1.100.

## 📤 7. Packet Leaving VPP (Egress)

Final packet transmitted from Ethernet1.100:

**Ethernet Header**
```bash
src MAC = CC:CC:CC:CC:CC:CC
dst MAC = DD:DD:DD:DD:DD:DD
vlan    = 100
```

**IP Header**

```bash
src IP = 192.168.10.10
dst IP = 1.1.1.1
ttl = 63
```
This packet is now sent toward the next-hop (10.61.8.120). This is standard router behavior.

## 🧠 8. Why This Is L3 Forwarding?

Because VPP:

**❌ DOES NOT change:**

- Source IP

- Destination IP

**✔ DOES change:**

- Destination MAC (next-hop’s MAC)

- Source MAC (output interface MAC)

- TTL and checksum

✔ VPP changes the MAC addresses (L2 rewrite)
✔ VPP keeps IP addresses unchanged (no NAT)
✔ TTL is decremented, checksum updated
✔ Packet enters through one interface and leaves through another

This is exactly what a L3 routers do.

## 📝 9. Summary

- Packet arrives on Ethernet0.100 with TG MAC → VPP ingress MAC.

- VPP performs IPv4 lookup.

- Forwarding decision sends packet out Ethernet1.100.

- VPP rewrites the Ethernet header (src = VPP egress MAC, dst = next-hop MAC).

- IP header mostly unchanged → TTL decremented.

- Packet forwarded toward next-hop.

This provides a clean, deterministic IPv4 forwarding path for testing.

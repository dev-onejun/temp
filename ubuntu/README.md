# About Ubuntu Settings

## USER
### How to ADD,DELETE user
1) add
`$ sudo adduser <username>`

#### To give sudo privilge
* `$ sudo usermod -aG sudo <username>`
* run a command with sudo privileges without entering the password
    - `$ EDITOR=vim visudo`
    - adding a line below to end of file. replace username with yours
        - `username ALL=(ALL) NOPASSWD: ALL`

2) delete
`$ sudo deluser <username>`
* IF YOU WANT to remove the user files
	- `$ sudo deluser --remove-home <username>`

## Connect AirPods
### Enabling Airpods as earbuds and microphone
* https://reckoning.dev/blog/airpods-pro-ubuntu/

## LVM (file system)
### how to resize the default LVM volume
* https://slice2.com/2020/12/05/howto-easily-resize-the-default-lvm-volume-on-ubuntu-18-04/
### About LVM and how to manage ...
* [About LVM](https://www.digitalocean.com/community/tutorials/an-introduction-to-lvm-concepts-terminology-and-operations)
* [how to use LVM to manage storage device](https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-18-04)

## managing packages using apt
``` bash
$ ls /etc/apt/sources.list.d/
```
``` bash
$ sudo add-apt-repository --remove ppa:whatever/ppa
```

## apt-key
* apt-key is deprecated .. so if you got warning about it, see [here](https://manpages.ubuntu.com/manpages/jammy/en/man8/apt-key.8.html#deprecation)


## setting Firewall with ufw
* https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04


## When network does not work ..
<p>I've experienced the Internet connection wasn't established after inserting gpu on my computer.
The reason was the settings about PCI devices. My LAN Card and GPU used PCI bus.
but when I used before, I didn't use GPU. So my computer set LAN Card using PCI bus, named enp2s0.
However, after setting gpu, I don't know why exactly, but LAN Card got enp3s0. I might think the gpu get second PCI device name.
Long prefaces. I solved problem using below try.
</p>

[Reference](https://askubuntu.com/questions/1362467/cant-enable-enp3s0-ethernet-interface-and-ethernet-wired-simply-does-not-work)
1) `sudo lshw -C network`
    - outputs are the LAN Cards that computer can use.
    - I had gotten `*-network DISABLED` about my mainboard LAN card.
2) `sudo ip link set enp3s0 up`
3) change PCI devices name on `/etc/netplan/*.yaml`
    - the exact file name is different. find your mainboard(or something you want) LAN card setting.
    - example
    ``` yaml
    network:
        version: 2
        renderer: NetworkManager
        ethernets:
            enp3s0:
                dhcp4: true
    ```
4) sudo netplan apply
5) sudo systemctl restart NetworkManager.service

* and I don't use [this](https://krujy.tistory.com/13), but it could be useful maybe..


## Setting the default editor for all programs
``` bash
$ export VISUAL=vim
$ export EDITOR='$VISUAL'
```
* Setting both is not necessarily needed, but some programs may be required.

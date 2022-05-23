# About Ubuntu Settings

## USER
### How to ADD,DELETE user
1) add
`$ sudo adduser <username>`

#### To give sudo privilge
* `$ sudo usermod -aG sudo <username>`

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

## setting Firewall with ufw
* https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04

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

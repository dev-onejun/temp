# mount
* You can configure mounting automatically in file `/etc/fstab`
* in the file, you can see what to do ... but the example is like `/dev/sdb2  /mnt/data  ext4 defaults  0  0`

## How to mount/unmount in Ubuntu to use USB, CD/DVD ROM, etc ...

```
This article is referred to blog https://url.kr/v6a2tg

OR you can search in GOOGLE, "how to access usb in ubuntu"
```

### Method to use your USB
1. Connect USB for Ubuntu PC

2. Check USB PATH and TYPE
	* Using command in below
		- `sudo fdisk -l`
	* You shoud check USB Type, which is FAT32 or NTFS.

3. Make directory to use mounting. This could be placed anywhere.
	* In my case, I make `/home/onejun/mount/usb`

4. Mount USB to your directory
	* Case USB Type is NTFS
		- `sudo mount -t ntfs $USB_PATH /home/onejun/mount/usb`
	* Case USB Type is FAT32
		- `sudo mount -t vfat $USB_PATH /home/onejun/mount/usb`

	- $USB_PATH's example :	/dev/sda1
				/dev/sdb1 ...

+ Additionally, you can check connectivity that USB mounted well.
	* `df -h


### After your work DONE
5. IMPORTANT STEP. Unmount your USB, before you pull out it.
	* `sudo eject /home/onejun/mount/usb`	OR
	* `sudo eject /dev/sda1` ...

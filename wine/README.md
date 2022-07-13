# wine
* An application that allows you to run Windows programs on a Linux system.

## Install KakaoTalk
1) install wine using apt, ubuntu package manager
2) install .exe file using `wine KakaoTalk.exe`, for example.
3) install winetricks (see docs)
4) set configuration by winetricks ...
* when fonts are break ..
    - Install winetricks so that install additional fonts.
    - [reference](https://askubuntu.com/questions/102538/wine-fonts-problem)
    - set to korean fonts in Kakaotalk settings.
* if network were unstable for downloads or something else ...
    - install windows dll files which are d3dx11, gdiplus, gecko, mono28
    - cf. gecko and mono28 were not in wine configuration whlie I installed.


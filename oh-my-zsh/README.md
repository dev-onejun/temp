# oh-my-zsh

## How to change oh-my-zsh's terminal path color
1) `cd ~/.oh-my-zsh/themes/`
2) find *.zsh-theme that use now. In my case, agnoster.zsh-theme
3) Change file content in `prompt_dir()` like ...
``` zsh
prompt_dir() {
    prompt_segment 39d $CURRENT_FG '%~'
}
```

<!--
 * @Description: Git常见问题解答
 * @Date: 2022-08-22 14:18:45
-->

# 使用 Git 遇到的一些问题

## git 撤销上次提交 commit

当写完代码后，在进行如下操作之后

```bash
git add .
git commit -m 'xxx'
```

还没有执行`git push`，此时想要修改或者撤销 commit，怎么办？

- 修改注释信息

```bash
git commit --amend
```

此时会进入 vim 编辑，修改完注释，退出 vim 编辑，`:wq`保存已编辑的注释，再执行`git push`即可。

- 撤回 commit

```bash
git reset --soft HEAD^
```

执行即可。

::: tip
`HEAD^`的意思是上一个版本，也可以写成 `HEAD~1`，如果你进行了 2 次 commit，想都撤回，可以使用 `HEAD~2`。

注意，这个命令仅仅是撤回 commit 操作，写的代码仍然保留。
:::

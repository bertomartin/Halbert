" SASS helpers
function! SGHSassCompile()
  write
  let file   = expand("%")
  let css_file = (substitute(expand("%"),"scss","","") . "css")

  let result = system("sass " . file . "  " . css_file)
  echo "Created " css_file
endfunction
au BufWritePost *.scss call SGHSassCompile()
au BufNewFile,BufReadPost *.scss nnoremap <leader>sc :call SGHSassCompile()<CR>

" Coffeescript helpers
au BufWritePost *.coffee silent CoffeeMake!
au BufNewFile,BufReadPost *.coffee setl foldmethod=indent nofoldenable shiftwidth=2 expandtab
au BufNewFile,BufReadPost *.coffee nnoremap <leader>cc :w<cr>:CoffeeRun<cr>

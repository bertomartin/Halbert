" SASS helpers
function! SGHSassCompile()
  write
  let file   = expand("%")
  let css_file = (substitute(expand("%"),"scss","","") . "css")

  let result = system("sass " . file . "  " . css_file)
  echo "Created " css_file
endfunction
augroup filetype_scss
  au!
  au BufWritePost *.scss call SGHSassCompile()
  au BufNewFile,BufReadPost *.scss nnoremap <leader>sc :call SGHSassCompile()<CR>
augroup END

" Coffeescript helpers
augroup filetype_coffeescript
  au!
  au BufWritePost *.coffee silent CoffeeMake!
  au BufNewFile,BufReadPost *.coffee setl foldmethod=indent nofoldenable shiftwidth=2 expandtab
  au BufNewFile,BufReadPost *.coffee nnoremap <leader>cr :w<cr>:CoffeeRun<cr>
  au BufNewFile,BufReadPost *.coffee nnoremap <leader>cc :w<cr>:CoffeeCompile<cr>
  au BufNewFile,BufReadPost *.coffee nnoremap <leader>cm :w<cr>:CoffeeMake<cr>
augroup END
let coffee_make_options = '--bare'

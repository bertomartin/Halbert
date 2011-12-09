function! SGHSassCompile()
  write
  let file   = expand("%")
  let css_file = (substitute(expand("%"),"scss","","") . "css")

  let result = system("sass " . file . "  " . css_file)
  echo "Created " css_file
endfunction
:map! <Leader>sc :call SGHSassCompile()<CR>

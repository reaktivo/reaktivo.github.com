

task :deploy do
  cmd = "rsync -avzP --exclude='.DS_Store' ./_site/ reaktivo.com:~/reaktivo.com/"
  system cmd
end
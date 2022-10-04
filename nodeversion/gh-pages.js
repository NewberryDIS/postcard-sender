import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/newberrydis/cortex-help.git', 
  user: {
   name: 'Nick White', 
   email: 'whiten@newberry.org' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
import { Component } from '@angular/core';
import { tutorials } from './tutorial.component'
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <img [src]="IMAGELINK">  
             <input type="text" value="Angular">
            <my-tutorials></my-tutorials>`,
    directives: [tutorials]
})
export class AppComponent {
  public title="this is Angular2";
    IMAGELINK="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAABC1BMVEX////qQzVChfQ0qFP7vAU0f/S7z/rz9v4nefMufPIwp1D7ugDpOirqQDIspk3pNCL96+r+9vX3/Pn7vwD3u7bsY1iNypzb7+D6vxL5zMk9gvS23sBMivXvcmkdo0Vuv4P+9NnU4/z8yDz4wr/rSTxbt3Pq9e3zlY780Gj93o//9+T8017//fb8zUv0oZzyi4NFsGP0q6b968Lj7P374N794ZvveXGMsfrG5c709uhsoPahwPmzsRr42oNYq0rjugtblfWFsD08lbI4itJWsXud0qo0omx8wo06nY8/ksQ9maU5n4RBieP5rwfzjQbsU0jsVzDwdCansiOdsjTJtx7ygiL2nhTw4qEAb/FdWdvgAAAEgUlEQVRYhb2XeZ+aRhzGQXDd5Rg8Ap4LmhVN262wq2FtTJpNUmt6ZG165v2/ks6gKDIHMxT7/LcLfj+Pz++YUZJy1agvurPg2t6OZXm8te1g1l3UG/mfy+VCqm1YhmGapoxkmgb8cxvNuv+J3ugGYxlSZUyQL4+DwvT6nW2RsEe8Zd8tioBnWxY3oW+ndWHHxByI1mdC8Gc2HziWYT/jBi8iix+MnFsRZ+Q3Y0MEHBsfdznAjakpZHlvXL7LJdcjSxyM2FaQ0+QLWziMREbEZC/kwmRzfMMkbwvEvCdbbLJcnMz2XC+es2kxm68RMclw1+1E6E1TZs/jlNF1cEPbUTCdzaZBZMvZfWia7IG5oeUMF5BxfXM4V9CZE5hpummxPS/GFLQhR4RPdqPDNjDzhpwStGldU46SZIfldB3couSgjS3DUXdr5HYd6jtSHKYRMLd8PTByug7qjhSHaeRus6mRdwrcEg9tVhiJco+AN0+kAhY5rLMadlqffsuSuc6NXL3U1danz5ne4D9KGbp9rquq2joJxZiWQZaGiAzZfx9DMewSrotQL3ZoVT0EXlLQktRJ0C39r10TGkE55Hv1qNZTzLZE73EUfaWn2SiUkmoo3b5Io2Eon0tL+uvnJ2ioJ/aFgl9DFdNL6ssX3JrDt++zplV9SEV/qXLqciVlqhiTW/SveFnhVO9BSg3MAf1NGehH+Pa3GJoeNT+6MpBSs3hA35eCrkE01iD0Kgqisf5olYOenw1dGf2vaLU89JnKGKPP1Hzz843M/FyDHvf1edZTPOhCS1VsPeFHgf4PFf3liqwehkZLNXuA6ervXpOGrlG0yrKr6CjIHLt6552mtOlpk/Uqi74aoX+f1FF/+72iAEcUjQVSRWdj+oqjq6+BAuVOxMgXVayKtfjBYR71zh8aIitgI4Z+yLqOqyilhgaFsddShDwaYA1ysXuyvwTrfx7JwKc2CY/pymC0exJf3WHPKSmJVHKEd/Wr5Bn8waG/faecCPR5ybVHvD9WycNhR0/FvJMW8saNjUulcjk/PH3zWlOy0lw+9irbeOk8JOk7gJF5fWMtneqPWGsimyPvFQ6GpmupNyY+nghiO+yxrD0QPFeqFycv9Um2YZ8wQ+n/8AEvYaU3yLzmkdma6y/J09Ncei4A73OSRmqHpEiQccUjRN7sexo0o2kfexnjp0nHWlLQEA6Av2xPmrH7ZnMyaa99aHj/8MdMKMmMp+W4NDYEuMD3Ns567TgbPwQgZQOEP6VrebXCyVKTEneSOthLy3w9Tfl50GPEgTTxmWy63F9+3bN7j3MSGZZSoebN1iHwK0LQOW2Sy3bfx6Fk++7Ed8FMFO1jpUcs4ZFdNG8UCpMMa+kxepBpO3+ZNZ1sd/GZ5lrBy1A8FNfju3G1PSBmHACH+wbQ9wXgGuC0vNNkDTjhmhv2RS4tMTzkgMOluBYEI7X7cHey6Bpwvb7gzTNRs+2ECjEZDS5CxXfaBRwftVxvfLiuD7sUQV039J2+8AWf4H3SRvwwROQw9DeQOuHI4V9i3oZKKiGxLAAAAABJRU5ErkJggg==";
}

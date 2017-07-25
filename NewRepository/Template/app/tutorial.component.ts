import{ Component } from '@angular/core';
import{ classbinding} from './classbinding.component';
@Component({
    selector:'my-tutorials',
    template:`<h2 [style.color]="applycolor? 'darkred' :'blue' " >style binding</h2>
              <h4 [class.myclass]="applystyle">class binding</h4>
                <p>{{title}}</p>
                <h5 [class.classbinding]="bind_varible">author:{{title}}</h5> 
                <button (click)="onClick(demoInput.value)">clickme</button> 
                <input type="text" #demoInput>
                <input type="text" [(ngModel)]="fname">
                <input type="text" [(ngModel)]="lname">
                <input type="text" #mname value="mname">
                full name:{{fname}}{{lname}}{{mname}}`,

    directives:[ classbinding ],
    styles:[`.myclass{
    color: red ;
    text-decoration:underline}`]
})
export class tutorials{
    public applycolor=true;
    public applystyle=false;
    public bind_varible=true;
    public name="lakki";
    onClick(value){
        console.log('event binding'+ value);
    }
    public fname;
    public lname;
    public mname="lovely";
}



(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{o6bk:function(t,e,n){"use strict";n.r(e);var s=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),r=n("fXoL");function c(t,e){if(1&t&&(r.Sb(0,"li",4),r.Sb(1,"a",5),r.Dc(2),r.Rb(),r.Rb()),2&t){const t=e.$implicit;r.Ab(1),r.nc("routerLink",t.fragment),r.Ab(1),r.Ec(t.title)}}let a=(()=>{class t{constructor(){this.links=[{title:"Nueva mascota",fragment:"new-pet"},{title:"Nuevo tipo mascota",fragment:"pet-type"},{title:"Crear miembro equipo",fragment:"new-team-member"},{title:"Administrar equipo",fragment:"#"},{title:"Todas las mascotas",fragment:"pets"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-back-ofice"]],decls:5,vars:1,consts:[[1,"wrapper"],["id","sidebar"],[1,"list-unstyled","components"],["class","active",4,"ngFor","ngForOf"],[1,"active"],["data-toggle","collapse","aria-expanded","false",1,"dropdown-toggle",3,"routerLink"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"nav",1),r.Sb(2,"ul",2),r.Bc(3,c,3,2,"li",3),r.Rb(),r.Rb(),r.Ob(4,"router-outlet"),r.Rb()),2&t&&(r.Ab(3),r.nc("ngForOf",e.links))},directives:[s.k,o.e,o.c],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:stretch}"]}),t})();class l{constructor(t,e,n){this.formGroupIntance=t,this.controlName=e,this.validationRules=n}execute(){const t=this.formGroupIntance.get(this.controlName);t&&(this.validationRules?t.setValidators(this.validationRules):t.clearValidators())}}var p=n("ZF+8");function u(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,t.loginForm.value))}}function b(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.jc(3,"async"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,r.kc(3,3,t.user$)))}}function m(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"async"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,t.error$))}}let d=(()=>{class t{constructor(t,e,n,s){this.commandS=t,this.formS=e,this.router=n,this.userS=s,this.loginConstants={USER_NAME:"USER_NAME",PASSWORD:"PASSWORD"},this.regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,this.isDevMode=Object(r.U)()}ngOnInit(){this.loadForm(),this.user$=this.userS.user$,this.subscription=this.user$.subscribe(()=>this.router.navigate(["back-office"])),this.error$=this.userS.errorMessage$}ngOnDestroy(){this.subscription.unsubscribe()}loadForm(){this.loginForm=this.getFormInstance(),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.USER_NAME,[i.n.required])),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.PASSWORD,[i.n.required,i.n.pattern(this.regexPassword)])),this.commandS.executeCommands()}getFormInstance(){const t=new i.e({}),e=new i.c,n=new i.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}login(){const t=this.formS.getInputValue(this.loginConstants.USER_NAME,this.loginForm),e=this.formS.getInputValue(this.loginConstants.PASSWORD,this.loginForm);this.userS.login(t,e)}logout(){this.userS.logout()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(p.a),r.Nb(p.b),r.Nb(o.b),r.Nb(p.c))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-login"]],decls:22,vars:6,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control",3,"formControlName"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1",1,"form-control",3,"formControlName"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"h1",1),r.Dc(2,"Login"),r.Rb(),r.Sb(3,"form",2),r.Sb(4,"div",3),r.Sb(5,"label",4),r.Dc(6,"Email address"),r.Rb(),r.Ob(7,"input",5),r.Sb(8,"small",6),r.Dc(9,"We'll never share your email with anyone else."),r.Rb(),r.Rb(),r.Sb(10,"div",3),r.Sb(11,"label",7),r.Dc(12,"Password"),r.Rb(),r.Ob(13,"input",8),r.Rb(),r.Sb(14,"button",9),r.ec("click",(function(){return e.login()})),r.Dc(15,"Login"),r.Rb(),r.Sb(16,"button",9),r.ec("click",(function(){return e.logout()})),r.Dc(17,"Close"),r.Rb(),r.Rb(),r.Ob(18,"hr",10),r.Bc(19,u,3,3,"pre",11),r.Bc(20,b,4,5,"pre",11),r.Bc(21,m,3,3,"pre",11),r.Rb()),2&t&&(r.Ab(3),r.nc("formGroup",e.loginForm),r.Ab(4),r.oc("formControlName",e.loginConstants.USER_NAME),r.Ab(6),r.oc("formControlName",e.loginConstants.PASSWORD),r.Ab(6),r.nc("ngIf",e.isDevMode),r.Ab(1),r.nc("ngIf",e.isDevMode),r.Ab(1),r.nc("ngIf",e.isDevMode))},directives:[i.p,i.k,i.f,i.a,i.j,i.d,s.l],pipes:[s.g,s.b],styles:[""]}),t})();var f=n("lJxs");let h=(()=>{class t{constructor(t,e){this.router=t,this.userS=e}canActivate(t,e){return this.userS.user$.pipe(Object(f.a)(t=>!!t||(this.router.navigate(["back-office/login"]),!1)))}}return t.\u0275fac=function(e){return new(e||t)(r.ac(o.b),r.ac(p.c))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})(),g=(()=>{class t{constructor(t,e){this.commandS=t,this.formS=e,this.loginConstants={USER_NAME:"name",PASSWORD:"PASSWORD"}}ngOnInit(){}getFormInstance(){const t=new i.e({}),e=new i.c,n=new i.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(p.a),r.Nb(p.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-new-pet"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"new-pet works!"),r.Rb())},styles:[""]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-pets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"pets works!"),r.Rb())},styles:[""]}),t})();var w=n("mrSG"),A=n("S/Aq");function v(t,e){if(1&t&&(r.Sb(0,"li",1),r.Dc(1),r.Rb()),2&t){const t=e.$implicit;r.Ab(1),r.Fc(" ",t.name,"\n")}}let R=(()=>{class t{constructor(t,e,n){this.commandS=t,this.formS=e,this.afs=n,this.petTypeConstants={NAME:"NAME"}}ngOnInit(){this.petTypeForm=this.getFormInstance(),this.getPetTypes(),this.items$=this.afs.collection("petType").valueChanges(),this.petTypes$=this.afs.collection("petType").valueChanges()}getFormInstance(){const t=new i.e({}),e=new i.c;return t.addControl(this.petTypeConstants.NAME,e),t}getPetTypes(){return Object(w.__awaiter)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(p.a),r.Nb(p.b),r.Nb(A.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-pet-type"]],decls:8,vars:8,consts:[["class","text",4,"ngFor","ngForOf"],[1,"text"]],template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"pet-type works!"),r.Rb(),r.Sb(2,"pre"),r.Dc(3),r.jc(4,"json"),r.jc(5,"async"),r.Rb(),r.Bc(6,v,2,1,"li",0),r.jc(7,"async")),2&t&&(r.Ab(3),r.Fc(" ",r.kc(4,2,r.kc(5,4,e.petTypes$)),""),r.Ab(3),r.nc("ngForOf",r.kc(7,6,e.items$)))},directives:[s.k],pipes:[s.g,s.b],styles:[""]}),t})();n.d(e,"BackOfficeModule",(function(){return D}));const y=[s.c,o.d.forChild([{path:"",component:a,canActivate:[h],children:[{path:"",redirectTo:"new-pet",pathMatch:"full"},{path:"new-pet",component:g,canActivate:[h]},{path:"pets",component:S,canActivate:[h]},{path:"pet-type",component:R,canActivate:[h]}]},{path:"login",component:d}]),i.m,i.g],C=[h];let D=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[...C],imports:[[...y]]}),t})()}}]);
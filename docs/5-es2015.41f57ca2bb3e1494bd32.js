(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{o6bk:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),s=n("tyNb"),a=n("3Pt+"),r=n("fXoL");function i(t,e){if(1&t&&(r.Sb(0,"li",4),r.Sb(1,"a",5),r.Dc(2),r.Rb(),r.Rb()),2&t){const t=e.$implicit;r.Ab(1),r.nc("routerLink",t.fragment),r.Ab(1),r.Ec(t.title)}}let c=(()=>{class t{constructor(){this.links=[{title:"Nueva mascota",fragment:"new-pet"},{title:"Nuevo tipo mascota",fragment:"pet-type"},{title:"Crear miembro equipo",fragment:"new-team-member"},{title:"Administrar mascotas",fragment:"manage-pets"},{title:"Administrar equipo",fragment:"manage-team"},{title:"Todas las mascotas",fragment:"pets"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-back-ofice"]],decls:5,vars:1,consts:[[1,"wrapper"],["id","sidebar"],[1,"list-unstyled","components"],["class","active",4,"ngFor","ngForOf"],[1,"active"],["data-toggle","collapse","aria-expanded","false",1,"dropdown-toggle",3,"routerLink"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"nav",1),r.Sb(2,"ul",2),r.Bc(3,i,3,2,"li",3),r.Rb(),r.Rb(),r.Ob(4,"router-outlet"),r.Rb()),2&t&&(r.Ab(3),r.nc("ngForOf",e.links))},directives:[o.l,s.e,s.c],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:stretch}"]}),t})();class m{constructor(t,e,n){this.formGroupIntance=t,this.controlName=e,this.inputValue=n}execute(){const t=this.formGroupIntance.get(this.controlName);t&&t.setValue(this.inputValue)}}var b=function(t){return t.DEFAULT="DEFAULT",t.EDIT="EDIT",t.DEFINITIVE="DEFINITIVE",t.MARK_AS_DIRTY_AND_TOUCHED="MARK_AS_DIRTY_AND_TOUCHED",t.RESET="RESET",t}({});class l{constructor(t,e,n){this.formGroupIntance=t,this.controlName=e,this.validationRules=n}execute(){const t=this.formGroupIntance.get(this.controlName);t&&(this.validationRules?t.setValidators(this.validationRules):t.clearValidators())}}var d=n("ZF+8");function u(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,t.loginForm.value))}}function p(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.jc(3,"async"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,r.kc(3,3,t.user$)))}}function h(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"async"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,t.error$))}}let f=(()=>{class t{constructor(t,e,n,o,s){this.commandS=t,this.formS=e,this.router=n,this.userS=o,this.externalLibsS=s,this.loginConstants={USER_NAME:"USER_NAME",PASSWORD:"PASSWORD"},this.regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,this.isDevMode=this.externalLibsS.isDevMode}ngOnInit(){this.loadForm(),this.user$=this.userS.user$,this.subscription=this.user$.subscribe(()=>this.router.navigate(["back-office"])),this.error$=this.userS.errorMessage$}ngOnDestroy(){this.subscription.unsubscribe()}loadForm(){this.loginForm=this.getFormInstance(),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.USER_NAME,[a.n.required])),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.PASSWORD,[a.n.required,a.n.pattern(this.regexPassword)])),this.isDevMode&&(this.commandS.addCommand(new m(this.loginForm,this.loginConstants.USER_NAME,"amarele1991@gmail.com")),this.commandS.addCommand(new m(this.loginForm,this.loginConstants.PASSWORD,"Grymmjow8@"))),this.commandS.executeCommands()}getFormInstance(){const t=new a.e({}),e=new a.c,n=new a.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}login(){const t=this.formS.getInputValue(this.loginConstants.USER_NAME,this.loginForm),e=this.formS.getInputValue(this.loginConstants.PASSWORD,this.loginForm);this.userS.login(t,e)}logout(){this.userS.logout()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(d.a),r.Nb(d.e),r.Nb(s.b),r.Nb(d.f),r.Nb(d.c))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-login"]],decls:22,vars:6,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control",3,"formControlName"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1",1,"form-control",3,"formControlName"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"h1",1),r.Dc(2,"Login"),r.Rb(),r.Sb(3,"form",2),r.Sb(4,"div",3),r.Sb(5,"label",4),r.Dc(6,"Email address"),r.Rb(),r.Ob(7,"input",5),r.Sb(8,"small",6),r.Dc(9,"We'll never share your email with anyone else."),r.Rb(),r.Rb(),r.Sb(10,"div",3),r.Sb(11,"label",7),r.Dc(12,"Password"),r.Rb(),r.Ob(13,"input",8),r.Rb(),r.Sb(14,"button",9),r.ec("click",(function(){return e.login()})),r.Dc(15,"Login"),r.Rb(),r.Sb(16,"button",9),r.ec("click",(function(){return e.logout()})),r.Dc(17,"Close"),r.Rb(),r.Rb(),r.Ob(18,"hr",10),r.Bc(19,u,3,3,"pre",11),r.Bc(20,p,4,5,"pre",11),r.Bc(21,h,3,3,"pre",11),r.Rb()),2&t&&(r.Ab(3),r.nc("formGroup",e.loginForm),r.Ab(4),r.oc("formControlName",e.loginConstants.USER_NAME),r.Ab(6),r.oc("formControlName",e.loginConstants.PASSWORD),r.Ab(6),r.nc("ngIf",e.isDevMode),r.Ab(1),r.nc("ngIf",e.isDevMode),r.Ab(1),r.nc("ngIf",e.isDevMode))},directives:[a.p,a.k,a.f,a.a,a.j,a.d,o.m],pipes:[o.g,o.b],styles:[""]}),t})();var S=n("lJxs");let g=(()=>{class t{constructor(t,e){this.router=t,this.userS=e}canActivate(t,e){return this.userS.user$.pipe(Object(S.a)(t=>!!t||(this.router.navigate(["back-office/login"]),!1)))}}return t.\u0275fac=function(e){return new(e||t)(r.ac(s.b),r.ac(d.f))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{constructor(t,e){this.commandS=t,this.formS=e,this.loginConstants={USER_NAME:"name",PASSWORD:"PASSWORD"}}ngOnInit(){}getFormInstance(){const t=new a.e({}),e=new a.c,n=new a.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(d.a),r.Nb(d.e))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-new-pet"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"new-pet works!"),r.Rb())},styles:[""]}),t})(),A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-pets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"pets works!"),r.Rb())},styles:[""]}),t})();var R=n("mrSG"),v=n("S/Aq");function D(t,e){if(1&t&&(r.Sb(0,"li",1),r.Dc(1),r.Rb()),2&t){const t=e.$implicit;r.Ab(1),r.Fc(" ",t.name,"\n")}}let I=(()=>{class t{constructor(t,e,n){this.commandS=t,this.formS=e,this.afs=n,this.petTypeConstants={NAME:"NAME"}}ngOnInit(){this.petTypeForm=this.getFormInstance(),this.getPetTypes(),this.items$=this.afs.collection("petType").valueChanges(),this.petTypes$=this.afs.collection("petType").valueChanges()}getFormInstance(){const t=new a.e({}),e=new a.c;return t.addControl(this.petTypeConstants.NAME,e),t}getPetTypes(){return Object(R.__awaiter)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(d.a),r.Nb(d.e),r.Nb(v.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-pet-type"]],decls:8,vars:8,consts:[["class","text",4,"ngFor","ngForOf"],[1,"text"]],template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"pet-type works!"),r.Rb(),r.Sb(2,"pre"),r.Dc(3),r.jc(4,"json"),r.jc(5,"async"),r.Rb(),r.Bc(6,D,2,1,"li",0),r.jc(7,"async")),2&t&&(r.Ab(3),r.Fc(" ",r.kc(4,2,r.kc(5,4,e.petTypes$)),""),r.Ab(3),r.nc("ngForOf",r.kc(7,6,e.items$)))},directives:[o.l],pipes:[o.g,o.b],styles:[""]}),t})();var O=n("XNiG");let E=(()=>{class t{constructor(t){this.dbS=t,this.teamMembersSubject=new O.a,this.teamMembers$=this.teamMembersSubject.asObservable(),this.test$=this.dbS.getCollection("team-member").pipe(Object(S.a)(t=>t.map(t=>Object.assign(Object.assign({},t.payload.doc.data()),{firebaseId:t.payload.doc.id}))))}loadTeamMembers(){this.dbS.getCollection("team-member").subscribe(t=>this.teamMembersSubject.next(t),t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(r.ac(d.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})();function N(t,e){if(1&t){const t=r.Tb();r.Sb(0,"tr"),r.Sb(1,"th",4),r.Dc(2),r.Rb(),r.Sb(3,"td"),r.Dc(4),r.Rb(),r.Sb(5,"td"),r.Dc(6),r.Rb(),r.Sb(7,"td"),r.Dc(8),r.Rb(),r.Sb(9,"td"),r.Sb(10,"button",5),r.ec("click",(function(){r.vc(t);const n=e.$implicit;return r.ic().edit(n.firebaseId)})),r.Dc(11," Editar "),r.Rb(),r.Rb(),r.Sb(12,"td"),r.Sb(13,"button",6),r.ec("click",(function(){r.vc(t);const n=e.$implicit;return r.ic().delete(n.firebaseId)})),r.Dc(14," Eliminar "),r.Rb(),r.Rb(),r.Rb()}if(2&t){const t=e.$implicit,n=e.index;r.Ab(2),r.Ec(n+1),r.Ab(2),r.Ec(t.name),r.Ab(2),r.Ec(t.occupation),r.Ab(2),r.Ec(t.role)}}function w(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.jc(3,"async"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Fc(" ",r.kc(2,1,r.kc(3,3,t.teamMembers$))," ")}}let M=(()=>{class t{constructor(t,e,n,o){this.router=t,this.mtS=e,this.externalLibsS=n,this.dbS=o,this.isDevMode=this.externalLibsS.isDevMode}ngOnInit(){this.teamMembers$=this.mtS.test$}edit(t){this.router.navigate([`back-office/new-team-member/${t}`])}delete(t){this.dbS.deleteCollection("team-member",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(s.b),r.Nb(E),r.Nb(d.c),r.Nb(d.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-manage-team"]],decls:19,vars:4,consts:[[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(r.Sb(0,"table",0),r.Sb(1,"thead"),r.Sb(2,"tr"),r.Sb(3,"th",1),r.Dc(4,"#"),r.Rb(),r.Sb(5,"th",1),r.Dc(6,"Nombre"),r.Rb(),r.Sb(7,"th",1),r.Dc(8,"Ocupaci\xf3n"),r.Rb(),r.Sb(9,"th",1),r.Dc(10,"Rol"),r.Rb(),r.Sb(11,"th",1),r.Dc(12,"Editar"),r.Rb(),r.Sb(13,"th",1),r.Dc(14,"Eliminar"),r.Rb(),r.Rb(),r.Rb(),r.Sb(15,"tbody"),r.Bc(16,N,15,4,"tr",2),r.jc(17,"async"),r.Rb(),r.Rb(),r.Bc(18,w,4,5,"pre",3)),2&t&&(r.Ab(16),r.nc("ngForOf",r.kc(17,2,e.teamMembers$)),r.Ab(2),r.nc("ngIf",e.isDevMode))},directives:[o.l,o.m],pipes:[o.b,o.g],styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-manage-pets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Sb(0,"p"),r.Dc(1,"manage-pets works!"),r.Rb())},styles:[""]}),t})();var T=n("7Cbv");let F=(()=>{class t extends class{constructor(){this.id=Object(T.a)(),this.creationDate=(new Date).toJSON()}}{constructor(){super()}getId(){return this.id}getFormInstance(){const e=new a.e({}),n=new a.c,o=new a.c,s=new a.c,r=new a.c,i=new a.c;return e.addControl(t.formConstants.ID,n),e.addControl(t.formConstants.NAME,o),e.addControl(t.formConstants.ROLE,s),e.addControl(t.formConstants.DESCRIPTION,r),e.addControl(t.formConstants.OCCUPATION,i),e}mapFormToTeamMember(t,e){return Object.assign(Object.assign({creationDate:this.creationDate},t.value),{avatar:e})}}return t.FILE_STORE_PATH="pet-son/team-members/",t.COLLECTION_PATH="team-member/",t.formConstants={ID:"id",NAME:"name",ROLE:"role",DESCRIPTION:"description",OCCUPATION:"occupation"},t})();function P(t,e){1&t&&(r.Sb(0,"span"),r.Dc(1," Ingrese un nombre de usuario. "),r.Rb())}function k(t,e){1&t&&(r.Sb(0,"span"),r.Dc(1," Ingrese el rol en la fundaci\xf3n. "),r.Rb())}function _(t,e){1&t&&(r.Sb(0,"span"),r.Dc(1," Ingrese una descrici\xf3n. "),r.Rb())}function L(t,e){1&t&&(r.Sb(0,"span"),r.Dc(1," Ingrese la ocupaci\xf3n. "),r.Rb())}function j(t,e){if(1&t&&(r.Sb(0,"div",3),r.Ob(1,"img",14),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.nc("src",t.avatarFullPath,r.wc)}}function $(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.jc(2,"json"),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(r.kc(2,1,t.teamMemberForm.value))}}function x(t,e){if(1&t&&(r.Sb(0,"pre"),r.Dc(1),r.Rb()),2&t){const t=r.ic();r.Ab(1),r.Ec(t.teamMemberForm.errors)}}const U=function(t){return{"is-invalid":t}};let B=(()=>{class t{constructor(t,e,n,o,s,a,r){this.rote=t,this.roter=e,this.commandS=n,this.formS=o,this.externalLibsS=s,this.fileStorageS=a,this.dbS=r,this.formConstants=F.formConstants,this.isPendingAvatar=!1,this.isDevMode=this.externalLibsS.isDevMode,this.teamMember=new F}ngOnInit(){this.teamMemberForm=this.teamMember.getFormInstance();const t=this.rote.snapshot.paramMap.get("teamMemberId");t?this.dbS.getCollectionById(F.COLLECTION_PATH,t).subscribe(e=>{e.exists&&this.loadFormByState(b.EDIT,this.teamMemberForm,t,e.data())}):this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}loadFormByState(t,e,n,o){switch(t){case b.DEFAULT:this.commandS.addCommand(new l(e,this.formConstants.ID,[a.n.required])),this.commandS.addCommand(new l(e,this.formConstants.NAME,[a.n.required])),this.commandS.addCommand(new l(e,this.formConstants.ROLE,[a.n.required])),this.commandS.addCommand(new l(e,this.formConstants.DESCRIPTION,[a.n.required])),this.commandS.addCommand(new l(e,this.formConstants.OCCUPATION,[a.n.required])),this.commandS.addCommand(new m(e,this.formConstants.ID,n));break;case b.EDIT:this.commandS.addCommand(new m(e,this.formConstants.ID,n)),this.commandS.addCommand(new m(e,this.formConstants.NAME,o.name)),this.commandS.addCommand(new m(e,this.formConstants.ROLE,o.role)),this.commandS.addCommand(new m(e,this.formConstants.DESCRIPTION,o.description)),this.commandS.addCommand(new m(e,this.formConstants.OCCUPATION,o.occupation)),this.fileStorageS.getFile(F.FILE_STORE_PATH,o.id).then(t=>{this.avatarFullPath=t});break;case b.MARK_AS_DIRTY_AND_TOUCHED:this.formS.markAsTouchedAndMarkAsDirty(e),this.avatar||(this.isPendingAvatar=!0);break;case b.RESET:this.formS.reset(e)}this.commandS.executeCommands()}create(){!this.teamMemberForm.invalid&&this.avatar?this.save():this.loadFormByState(b.MARK_AS_DIRTY_AND_TOUCHED,this.teamMemberForm)}clear(){this.isPendingAvatar=!1,this.avatar=null,this.avatarFullPath=null,this.teamMember=new F,this.loadFormByState(b.RESET,this.teamMemberForm),this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}loadAvatar(t){this.avatar=t.target.files[0],this.isPendingAvatar=!1}save(){this.fileStorageS.saveFile(F.FILE_STORE_PATH,this.teamMember.getId(),this.avatar).then(t=>{this.avatarFullPath=t.metadata.fullPath,this.dbS.saveCollection(F.COLLECTION_PATH,this.teamMember.mapFormToTeamMember(this.teamMemberForm,this.avatarFullPath)).then(t=>{this.roter.navigate([`back-office/new-team-member/${t.id}`])},t=>console.log(t))})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(s.a),r.Nb(s.b),r.Nb(d.a),r.Nb(d.e),r.Nb(d.c),r.Nb(d.d),r.Nb(d.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-new-team-member"]],decls:43,vars:31,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["aria-describedby","nameHelp",1,"form-control",3,"formControlName","id","ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["for","exampleInputPassword1"],["aria-describedby","roleHelp",1,"form-control",3,"formControlName","id","ngClass"],["type","file","id","avatar",1,"form-control",3,"ngClass","change"],["class","form-group",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[3,"src"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"h3",1),r.Dc(2,"Crear miembro equipo"),r.Rb(),r.Sb(3,"form",2),r.Sb(4,"div",3),r.Sb(5,"label",4),r.Dc(6,"Nombre"),r.Rb(),r.Ob(7,"input",5),r.Sb(8,"div",6),r.Bc(9,P,2,0,"span",7),r.Rb(),r.Rb(),r.Sb(10,"div",3),r.Sb(11,"label",8),r.Dc(12,"Rol en la fundaci\xf3n"),r.Rb(),r.Ob(13,"input",9),r.Sb(14,"div",6),r.Bc(15,k,2,0,"span",7),r.Rb(),r.Rb(),r.Sb(16,"div",3),r.Sb(17,"label",8),r.Dc(18,"Descripci\xf3n"),r.Rb(),r.Ob(19,"input",9),r.Sb(20,"div",6),r.Bc(21,_,2,0,"span",7),r.Rb(),r.Rb(),r.Sb(22,"div",3),r.Sb(23,"label",8),r.Dc(24,"Ocupaci\xf3n"),r.Rb(),r.Ob(25,"input",9),r.Sb(26,"div",6),r.Bc(27,L,2,0,"span",7),r.Rb(),r.Rb(),r.Sb(28,"div",3),r.Sb(29,"label",8),r.Dc(30,"Cargar foto"),r.Rb(),r.Sb(31,"input",10),r.ec("change",(function(t){return e.loadAvatar(t)})),r.Rb(),r.Sb(32,"div",6),r.Sb(33,"span"),r.Dc(34," Seleccione una foto. "),r.Rb(),r.Rb(),r.Rb(),r.Bc(35,j,2,1,"div",11),r.Sb(36,"button",12),r.ec("click",(function(){return e.create()})),r.Dc(37,"Crear"),r.Rb(),r.Sb(38,"button",12),r.ec("click",(function(){return e.clear()})),r.Dc(39,"Limpiar"),r.Rb(),r.Rb(),r.Ob(40,"hr",13),r.Bc(41,$,3,3,"pre",7),r.Bc(42,x,2,1,"pre",7),r.Rb()),2&t&&(r.Ab(3),r.nc("formGroup",e.teamMemberForm),r.Ab(4),r.oc("formControlName",e.formConstants.NAME),r.oc("id",e.formConstants.NAME),r.nc("ngClass",r.qc(21,U,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.NAME,e.teamMemberForm))),r.Ab(2),r.nc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.NAME,e.teamMemberForm)),r.Ab(4),r.oc("formControlName",e.formConstants.ROLE),r.oc("id",e.formConstants.ROLE),r.nc("ngClass",r.qc(23,U,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.ROLE,e.teamMemberForm))),r.Ab(2),r.nc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.ROLE,e.teamMemberForm)),r.Ab(4),r.oc("formControlName",e.formConstants.DESCRIPTION),r.oc("id",e.formConstants.DESCRIPTION),r.nc("ngClass",r.qc(25,U,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.DESCRIPTION,e.teamMemberForm))),r.Ab(2),r.nc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.DESCRIPTION,e.teamMemberForm)),r.Ab(4),r.oc("formControlName",e.formConstants.OCCUPATION),r.oc("id",e.formConstants.OCCUPATION),r.nc("ngClass",r.qc(27,U,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.OCCUPATION,e.teamMemberForm))),r.Ab(2),r.nc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.OCCUPATION,e.teamMemberForm)),r.Ab(4),r.nc("ngClass",r.qc(29,U,e.isPendingAvatar)),r.Ab(4),r.nc("ngIf",e.isDevMode),r.Ab(6),r.nc("ngIf",e.isDevMode),r.Ab(1),r.nc("ngIf",e.isDevMode))},directives:[a.p,a.k,a.f,a.a,a.j,a.d,o.k,o.m],pipes:[o.g],styles:[""]}),t})();n.d(e,"BackOfficeModule",(function(){return G}));const H=[o.c,s.d.forChild([{path:"",component:c,canActivate:[g],children:[{path:"",redirectTo:"new-team-member",pathMatch:"full"},{path:"new-pet",component:C,canActivate:[g]},{path:"pets",component:A,canActivate:[g]},{path:"pet-type",component:I,canActivate:[g]},{path:"new-team-member",component:B,canActivate:[g]},{path:"new-team-member/:teamMemberId",component:B,canActivate:[g]},{path:"manage-pets",component:y,canActivate:[g]},{path:"manage-team",component:M,canActivate:[g]}]},{path:"login",component:f}]),a.m,a.g],q=[g,E];let G=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[...q],imports:[[...H]]}),t})()}}]);
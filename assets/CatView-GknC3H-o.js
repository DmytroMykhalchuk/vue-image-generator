import{A as U,W as D}from"./AsideForm-OZvg6gy4.js";import{_ as w,e as x,c,a as l,F as f,f as C,r as i,o as r,g as O,n as T,b as n,d as _,t as m,i as I,h as y,w as p,j as z,k as E,l as N}from"./index-z5ItCylT.js";const R={name:"CatStory",components:{},data(){return{isOpenedPreviews:!1}},methods:{onRedirect(t){this.$store.dispatch("openStoryItem",t.id)}},computed:{history(){return this.$store.getters.getStoryCat},catImage(){return this.$store.getters.getCatImage}}},W=["onClick","disabled"],A={class:"text-body2"},B={class:"preview-wrapper"},j=["src"];function H(t,a,P,V,e,o){const u=i("v-switch"),g=x("ripple");return r(),c("div",null,[l(u,{label:t.$t(`${e.isOpenedPreviews?"preview_off":"preview_on"}`),modelValue:e.isOpenedPreviews,"onUpdate:modelValue":a[0]||(a[0]=d=>e.isOpenedPreviews=d),color:"brown"},null,8,["label","modelValue"]),(r(!0),c(f,null,C(o.history,d=>{var h,b;return O((r(),c("button",{onClick:k=>o.onRedirect(d),class:T(`history__item ${((h=o.catImage)==null?void 0:h.id)===d.id&&"active"}`),disabled:((b=o.catImage)==null?void 0:b.id)===d.id},[n("div",A,[_(" ID: "),n("strong",null,m(d.id),1),n("div",B,[e.isOpenedPreviews?(r(),c("img",{key:0,class:"preview-wrapper__img",src:d.url,alt:""},null,8,j)):I("",!0)])])],10,W)),[[g]])}),256))])}const L=w(R,[["render",H],["__scopeId","data-v-4634cf03"]]),q={name:"Form",components:{AsideForm:U,CatStory:L},data(){return{isFetching:!1,isOpenedPreviewStory:!1,searchParams:{tag:null,isOpenFullTags:!1},ut:[]}},mounted(){},methods:{onSelectTag(t){this.searchParams.tag=t},onSearch(){this.isFetching=!0;const t={tag:this.searchParams.tag};this.$store.dispatch("fetchCatImage",t)},onRandomize(){this.$store.dispatch("fetchCatImage",{})}},computed:{catImage(){return this.$store.getters.getCatImage},filters(){return this.$store.getters.getCatFilter},catTags(){return this.$store.getters.getCatTags},catHistory(){return this.$store.getters.getStoryCat}},watch:{catImage(t){this.isFetching=!1},filters(t){this.searchParams.tag=t.tag}}},G={class:"top-actions"},J={class:"d-flex justify-center align-center pt-5"};function K(t,a,P,V,e,o){const u=i("CatStory"),g=i("v-btn"),d=i("v-switch"),h=i("v-chip"),b=i("v-select"),k=i("AsideForm");return r(),y(k,null,{history:p(()=>[l(u)]),form:p(()=>[n("div",G,[l(g,{onClick:o.onRandomize},{default:p(()=>[_(m(t.$t("random")),1)]),_:1},8,["onClick"]),l(g,{onClick:o.onSearch},{default:p(()=>[_(m(t.$t("regenerate")),1)]),_:1},8,["onClick"])]),n("div",null,[l(d,{label:`See ${e.isOpenedPreviewStory?"less":"more"} tags`,modelValue:e.searchParams.isOpenFullTags,"onUpdate:modelValue":a[0]||(a[0]=v=>e.searchParams.isOpenFullTags=v),variant:"underlined"},null,8,["label","modelValue"]),e.searchParams.isOpenFullTags?(r(!0),c(f,{key:0},C(o.catTags.tags,v=>(r(),y(h,{class:"ma-1",color:"brown",variant:e.searchParams.tag===v?"flat":"outlined",onClick:S=>o.onSelectTag(v)},{default:p(()=>[_(m(v),1)]),_:2},1032,["variant","onClick"]))),256)):(r(),y(b,{key:1,label:"Tag",chips:"",closableChips:"",modelValue:e.searchParams.tag,"onUpdate:modelValue":a[1]||(a[1]=v=>e.searchParams.tag=v),variant:"underlined",items:o.catTags.tags},null,8,["modelValue","items"]))]),n("div",J,[l(g,{color:"brown",loading:e.isFetching,onClick:o.onSearch},{default:p(()=>[_(m(t.$t("find")),1)]),_:1},8,["loading","onClick"])])]),_:1})}const M=w(q,[["render",K],["__scopeId","data-v-a850dfe1"]]),Q={name:"Display",components:{},data(){return{isCopied:!1,isOpenedPreviews:!1}},computed:{catImage(){return this.$store.getters.getCatImage},waifuStory(){return this.$store.getters.getStoryWaifu},catIsSaved(){return this.$store.getters.getIsSavedCat}},methods:{onSave(){this.$store.dispatch("saveCatImage")},onDonwload(){},onCopy(){navigator.clipboard.writeText(this.catImage),this.isCopied=!0},onSelectFavourite(t){this.$store.dispatch("onStoryOpen",t)}},watch:{catImage(){this.isCopied=!1}}},X={key:0},Y={class:"actions pa-3"},Z=["href"],ee=["src"],te={key:1,class:"d-flex justify-content"},se={class:"text-h6 text-center",style:{width:"100%"}};function ae(t,a,P,V,e,o){const u=i("v-btn"),g=i("v-icon");return r(),c("div",null,[o.catImage.url?(r(),c("div",X,[n("div",Y,[l(u,{icon:"mdi-link",onClick:o.onCopy,disabled:e.isCopied},null,8,["onClick","disabled"]),n("a",{href:o.catImage.url,target:"_blank",download:"waifu",style:{color:"inherit"}},[l(u,{icon:"mdi-download",onClick:o.onDonwload},null,8,["onClick"])],8,Z),l(u,{icon:"mdi-heart",onClick:o.onSave},{default:p(()=>[l(g,{color:o.catIsSaved?"red":""},null,8,["color"])]),_:1},8,["onClick"])]),n("img",{class:"image elevation-4",ref:"imageRef",src:o.catImage.url,alt:""},null,8,ee)])):(r(),c("div",te,[n("p",se,[o.catImage.isNotFound?(r(),c(f,{key:0},[_(m(t.$t("not_found_image")),1)],64)):(r(),c(f,{key:1},[_(m(t.$t("no_image")),1)],64))])]))])}const oe=w(Q,[["render",ae],["__scopeId","data-v-4559ea9d"]]),le={name:"Editing",components:{},data(){return{imageParams:{text:{color:null,size:null,sentence:null},type:"",filter:{type:"",r:0,g:0,b:0}},isOpenedPreviews:!1,catTypes:z,catFilter:E,basicColors:N}},methods:{onEdit(){this.imageParams.type!=""&&(this.imageParams.type=""),this.$store.dispatch("fetchEditing",{text:this.imageParams.text,type:this.imageParams.type,filter:this.imageParams.filter})},onSelectFavourite(t){this.$store.dispatch("onOpenFavourite",t)}},computed:{catImage(){return this.$store.getters.getCatImage},savedCats(){return this.$store.getters.getSavedCat},filters(){return this.$store.getters.getCatFilter}},watch:{catImage(){this.imageParams={text:{color:null,size:null,sentence:null},type:"",filter:{type:"",r:0,g:0,b:0}}},filters(t){this.imageParams.type=t.type||"",this.imageParams.filter=t.filter||{type:"",r:0,g:0,b:0}}}},ne={class:"elevation-4 wrapper"},re={key:0},ie={class:"text-caption"},ce={class:"text-caption"},de={class:"text-caption"},me={class:"text-body1"},ue={class:"text-options"},pe={class:"btn-wrapper"},ge={class:"elevation-4 wrapper"},_e={class:"text-body1"},ve=["onClick","disabled"],he={class:"btn__info"},fe={class:"btn__preview"},be=["src"];function ye(t,a,P,V,e,o){const u=i("v-radio"),g=i("v-radio-group"),d=i("v-slider"),h=i("v-text-field"),b=i("v-select"),k=i("v-btn"),v=i("v-switch"),S=x("ripple");return r(),c(f,null,[n("div",ne,[l(g,{label:t.$t("editing.type"),modelValue:e.imageParams.type,"onUpdate:modelValue":a[0]||(a[0]=s=>e.imageParams.type=s)},{default:p(()=>[l(u,{label:"Default",value:"",color:"brown"}),(r(!0),c(f,null,C(e.catTypes,s=>(r(),y(u,{label:s[0].toUpperCase()+s.slice(1),value:s,color:"brown"},null,8,["label","value"]))),256))]),_:1},8,["label","modelValue"]),l(g,{label:t.$t("editing.filter"),modelValue:e.imageParams.filter.type,"onUpdate:modelValue":a[1]||(a[1]=s=>e.imageParams.filter.type=s)},{default:p(()=>[l(u,{label:"Default",value:"",color:"brown"}),(r(!0),c(f,null,C(e.catFilter,s=>(r(),y(u,{label:s[0].toUpperCase()+s.slice(1),value:s,color:"brown"},null,8,["label","value"]))),256))]),_:1},8,["label","modelValue"]),e.imageParams.filter.type==="custom"?(r(),c("div",re,[_(m(t.$t("edititng.customization"))+" ",1),n("div",ie,m(t.$t("edititng.red")),1),l(d,{modelValue:e.imageParams.filter.r,"onUpdate:modelValue":a[2]||(a[2]=s=>e.imageParams.filter.r=s),color:"red",min:0,max:256,step:1,"thumb-label":""},null,8,["modelValue"]),n("div",ce,m(t.$t("edititng.green")),1),l(d,{modelValue:e.imageParams.filter.g,"onUpdate:modelValue":a[3]||(a[3]=s=>e.imageParams.filter.g=s),color:"green",min:0,max:256,step:1,"thumb-label":""},null,8,["modelValue"]),n("div",de,m(t.$t("edititng.blue")),1),l(d,{modelValue:e.imageParams.filter.b,"onUpdate:modelValue":a[4]||(a[4]=s=>e.imageParams.filter.b=s),color:"blue",min:0,max:256,step:1,"thumb-label":""},null,8,["modelValue"])])):I("",!0),n("div",null,[n("p",me,m(t.$t("editing.text")),1),l(h,{label:t.$t("editing.text"),variant:"underlined",modelValue:e.imageParams.text.sentence,"onUpdate:modelValue":a[5]||(a[5]=s=>e.imageParams.text.sentence=s)},null,8,["label","modelValue"]),n("div",ue,[l(b,{label:t.$t("editing.color"),modelValue:e.imageParams.text.color,"onUpdate:modelValue":a[6]||(a[6]=s=>e.imageParams.text.color=s),variant:"underlined",items:e.basicColors},null,8,["label","modelValue","items"]),l(b,{label:t.$t("editing.font_size"),modelValue:e.imageParams.text.size,"onUpdate:modelValue":a[7]||(a[7]=s=>e.imageParams.text.size=s),variant:"underlined",items:[10,12,14,16,18,20,22,24,26,28,30,34,38,42,46,50,54]},null,8,["label","modelValue"])])]),n("div",pe,[l(k,{onClick:o.onEdit,color:"brown"},{default:p(()=>[_(m(t.$t("edit")),1)]),_:1},8,["onClick"])])]),n("div",ge,[n("p",_e,m(t.$t("choosed")),1),l(v,{label:t.$t(`${e.isOpenedPreviews?"preview_off":"preview_on"}`),modelValue:e.isOpenedPreviews,"onUpdate:modelValue":a[8]||(a[8]=s=>e.isOpenedPreviews=s),color:"brown"},null,8,["label","modelValue"]),(r(!0),c(f,null,C(o.savedCats,s=>{var F,$;return O((r(),c("button",{class:T(`btn ${((F=o.catImage)==null?void 0:F.url)===s.url&&"active"}`),onClick:Ve=>o.onSelectFavourite(s),disabled:(($=o.catImage)==null?void 0:$.url)===s.url},[n("div",he,[_("ID: "),n("strong",null,m(s.id),1)]),n("div",fe,[e.isOpenedPreviews?(r(),c("img",{key:0,src:s.url,alt:""},null,8,be)):I("",!0)])],10,ve)),[[S]])}),256))])],64)}const Ce=w(le,[["render",ye],["__scopeId","data-v-c3b3fb20"]]),we={name:"CatView",components:{WrapperPage:D,Form:M,Display:oe,Editing:Ce},data(){return{}}};function Pe(t,a,P,V,e,o){const u=i("Form"),g=i("Display"),d=i("Editing"),h=i("WrapperPage");return r(),y(h,null,{form:p(()=>[l(u)]),content:p(()=>[l(g)]),info:p(()=>[l(d)]),_:1})}const Se=w(we,[["render",Pe]]);export{Se as default};
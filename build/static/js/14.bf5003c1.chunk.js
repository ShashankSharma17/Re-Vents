(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{809:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return o});var a=n(162),r=function(){return{type:a.c}},c=function(){return{type:a.b}},o=function(){return{type:a.a}}},814:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(26),r=n(47),c=n(808),o=n.n(c),s=function(e){if(e)return Object.entries(e).map(function(e){return Object.assign(e[1],{id:e[0]})})},i=function(e,t,n){return n.date=o()(n.date).toDate(),Object(r.a)({},n,{hostUid:e.uid,hostedBy:e.displayName,hostPhotoURL:t||"/assets/user.png",created:Date.now(),attendees:Object(a.a)({},e.uid,{going:!0,joinDate:Date.now(),photoURL:t||"/assets/user.png",displayName:e.displayName,host:!0})})},u=function(e){var t=Object.create(null);e.forEach(function(e){return t[e.id]=Object(r.a)({},e,{childNodes:[]})});var n=[];return e.forEach(function(e){e.parentId?t[e.parentId].childNodes.push(t[e.id]):n.push(t[e.id])}),n}},817:function(e,t,n){"use strict";n.d(t,"h",function(){return b}),n.d(t,"i",function(){return g}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return w}),n.d(t,"e",function(){return y}),n.d(t,"a",function(){return j}),n.d(t,"d",function(){return O}),n.d(t,"c",function(){return x}),n.d(t,"g",function(){return k});var a=n(47),r=n(26),c=n(806),o=n.n(c),s=n(816),i=n(807),u=n(808),l=n.n(u),d=n(159),p=n(830),h=n.n(p),m=n(809),f=n(219),v=n(131),b=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,i=c(),e.isLoaded,e.isEmpty,(u=Object(s.a)(e,["isLoaded","isEmpty"])).dateOfBirth!==a().firebase.profile.dateOfBirth&&(u.dateOfBirth=l()(u.dateOfBirth).toDate()),t.prev=4,t.next=7,i.updateProfile(u);case 7:d.toastr.success("Success","Profile updated"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[4,10]])}));return function(e,n,a){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i,u,l,d,p,f,v,b;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,s=r.getFirestore,i=h()(),u=c(),l=s(),d=u.auth().currentUser,p="".concat(d.uid,"/user_images"),f={name:i},t.prev=7,n(Object(m.c)()),t.next=11,u.uploadFile(p,e,null,f);case 11:return v=t.sent,t.next=14,v.uploadTaskSnapshot.downloadURL;case 14:return b=t.sent,t.next=17,l.get("users/".concat(d.uid));case 17:if(t.sent.data().photoURL){t.next=23;break}return t.next=21,u.updateProfile({photoURL:b});case 21:return t.next=23,d.updateProfile({photoURL:b});case 23:return t.next=25,l.add({collection:"users",doc:d.uid,subcollections:[{collection:"photos"}]},{name:i,url:b});case 25:n(Object(m.b)()),t.next=33;break;case 28:throw t.prev=28,t.t0=t.catch(7),console.log(t.t0),n(Object(m.a)()),new Error("Problem uploading photo");case 33:case"end":return t.stop()}},t,null,[[7,28]])}));return function(e,n,a){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i,u,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirebase,s=r.getFirestore,i=c(),u=s(),l=i.auth().currentUser,t.prev=4,t.next=7,i.deleteFile("".concat(l.uid,"/user_images/").concat(e.name));case 7:return t.next=9,u.delete({collection:"users",doc:l.uid,subcollections:[{collection:"photos",doc:e.id}]});case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(4),console.log(t.t0),new Error("Problem deleting the photo");case 15:case"end":return t.stop()}},t,null,[[4,11]])}));return function(e,n,a){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a){var c,s,i,u,l,d,p,h,v,b;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(m.c)()),c=f.a.firestore(),s=f.a.auth().currentUser,i=new Date(Date.now()),u=c.collection("users").doc(s.uid),l=c.collection("event_attendee"),t.prev=6,d=c.batch(),t.next=10,d.update(u,{photoURL:e.url});case 10:return t.next=12,l.where("userUid","==",s.uid).where("eventDate",">",i);case 12:return p=t.sent,t.next=15,p.get();case 15:h=t.sent,v=0;case 17:if(!(v<h.docs.length)){t.next=28;break}return t.next=20,c.collection("events").doc(h.docs[v].data().eventId);case 20:return b=t.sent,t.next=23,b.get();case 23:t.sent.data().hostUid===s.uid?d.update(b,Object(r.a)({hostPhotoURL:e.url},"attendees.".concat(s.uid,".photoURL"),e.url)):d.update(b,Object(r.a)({},"attendees.".concat(s.uid,".photoURL"),e.url));case 25:v++,t.next=17;break;case 28:return console.log(d),t.next=31,d.commit();case 31:n(Object(m.b)()),t.next=39;break;case 34:throw t.prev=34,t.t0=t.catch(6),console.log(t.t0),n(Object(m.a)()),new Error("Problem setting main photo");case 39:case"end":return t.stop()}},t,null,[[6,34]])}));return function(e,n){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a){var c,s,u,l,p,h;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(m.c)()),c=f.a.firestore(),s=f.a.auth().currentUser,u=a().firebase.profile,l={going:!0,joinDate:Date.now(),photoURL:u.photoURL||"/assets/user.png",displayName:u.displayName,host:!1},t.prev=5,p=c.collection("events").doc(e.id),h=c.collection("event_attendee").doc("".concat(e.id,"_").concat(s.uid)),t.next=10,c.runTransaction(function(){var t=Object(i.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get(p);case 2:return t.next=4,n.update(p,Object(r.a)({},"attendees.".concat(s.uid),l));case 4:return t.next=6,n.set(h,{eventId:e.id,userUid:s.uid,eventDate:e.date,host:!1});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 10:n(Object(m.b)()),d.toastr.success("Success","You have signed up to the event"),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(5),console.log(t.t0),n(Object(m.a)()),d.toastr.error("Oops","Problem signing up to event");case 19:case"end":return t.stop()}},t,null,[[5,14]])}));return function(e,n){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,c){var s,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=c.getFirestore,i=s(),u=i.auth().currentUser,t.prev=3,t.next=6,i.update("events/".concat(e.id),Object(r.a)({},"attendees.".concat(u.uid),i.FieldValue.delete()));case 6:return t.next=8,i.delete("event_attendee/".concat(e.id,"_").concat(u.uid));case 8:d.toastr.success("Success","You have removed yourself from the event"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0),d.toastr.error("Oops","something went wrong");case 15:case"end":return t.stop()}},t,null,[[3,11]])}));return function(e,n,a){return t.apply(this,arguments)}}()},O=function(e,t){return function(){var n=Object(i.a)(o.a.mark(function n(r,c){var s,i,u,l,d,p,h,b;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r(Object(m.c)()),s=f.a.firestore(),i=new Date(Date.now()),u=s.collection("event_attendee"),n.t0=t,n.next=1===n.t0?7:2===n.t0?9:3===n.t0?11:13;break;case 7:return l=u.where("userUid","==",e).where("eventDate","<=",i).orderBy("eventDate","desc"),n.abrupt("break",14);case 9:return l=u.where("userUid","==",e).where("eventDate",">=",i).orderBy("eventDate"),n.abrupt("break",14);case 11:return l=u.where("userUid","==",e).where("host","==",!0).orderBy("eventDate","desc"),n.abrupt("break",14);case 13:l=u.where("userUid","==",e).orderBy("eventDate","desc");case 14:return n.prev=14,n.next=17,l.get();case 17:d=n.sent,p=[],h=0;case 20:if(!(h<d.docs.length)){n.next=28;break}return n.next=23,s.collection("events").doc(d.docs[h].data().eventId).get();case 23:b=n.sent,p.push(Object(a.a)({},b.data(),{id:b.id}));case 25:h++,n.next=20;break;case 28:r({type:v.c,payload:{events:p}}),r(Object(m.b)()),n.next=36;break;case 32:n.prev=32,n.t1=n.catch(14),console.log(n.t1),r(Object(m.a)());case 36:case"end":return n.stop()}},n,null,[[14,32]])}));return function(e,t){return n.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirestore,s=c(),i=s.auth().currentUser,u={photoURL:e.photoURL||"/assets/user.png",city:e.city||"unknown city",displayName:e.displayName},t.prev=4,t.next=7,s.set({collection:"users",doc:i.uid,subcollections:[{collection:"following",doc:e.id}]},u);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[4,9]])}));return function(e,n,a){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(i.a)(o.a.mark(function t(n,a,r){var c,s,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.getFirestore,s=c(),i=s.auth().currentUser,t.prev=3,t.next=6,s.delete({collection:"users",doc:i.uid,subcollections:[{collection:"following",doc:e.id}]});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[3,8]])}));return function(e,n,a){return t.apply(this,arguments)}}()}},819:function(e,t,n){"use strict";n.d(t,"c",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return g}),n.d(t,"d",function(){return E}),n.d(t,"a",function(){return w});var a=n(47),r=n(806),c=n.n(r),o=n(807),s=n(808),i=n.n(s),u=n(159),l=n(814),d=n(219),p=n(809),h=n(131),m=n(815),f=n.n(m),v=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,a,r){var o,s,i,d,p,h;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.getFirestore,s=o(),i=s.auth().currentUser,d=a().firebase.profile.photoURL,p=Object(l.b)(i,d,e),t.prev=5,t.next=8,s.add("events",p);case 8:return h=t.sent,t.next=11,s.set("event_attendee/".concat(h.id,"_").concat(i.uid),{eventId:h.id,userUid:i.uid,eventDate:e.date,host:!0});case 11:u.toastr.success("Success!","Event has been created"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),u.toastr.error("Oops","Something went wrong");case 17:case"end":return t.stop()}},t,null,[[5,14]])}));return function(e,n,a){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,a){var r,o,s,l,h,m,v,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n(Object(p.c)()),r=d.a.firestore(),e.date=i()(e.date).toDate(),t.prev=3,o=r.collection("events").doc(e.id),0===f()(a().firestore.ordered.events[0].date,e.date)){t.next=31;break}return s=r.batch(),t.next=10,s.update(o,e);case 10:return l=r.collection("event_attendee"),t.next=13,l.where("eventId","==",e.id);case 13:return h=t.sent,t.next=16,h.get();case 16:m=t.sent,v=0;case 18:if(!(v<m.docs.length)){t.next=27;break}return t.next=21,r.collection("event_attendee").doc(m.docs[v].id);case 21:return b=t.sent,t.next=24,s.update(b,{eventDate:e.date});case 24:v++,t.next=18;break;case 27:return t.next=29,s.commit();case 29:t.next=33;break;case 31:return t.next=33,o.update(e);case 33:n(Object(p.b)()),u.toastr.success("Success!","Event has been updated"),t.next=41;break;case 37:t.prev=37,t.t0=t.catch(3),n(Object(p.a)()),u.toastr.error("Oops","Something went wrong");case 41:case"end":return t.stop()}},t,null,[[3,37]])}));return function(e,n){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(o.a)(c.a.mark(function n(a,r,o){var s,i,l;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:s=o.getFirestore,i=s(),l=e?"Are you sure you want to cancel the event?":"This will reactivate the event - are you sure?\xcc";try{u.toastr.confirm(l,{onOk:function(){return i.update("events/".concat(t),{cancelled:e})}})}catch(a){console.log(a)}case 4:case"end":return n.stop()}},n)}));return function(e,t,a){return n.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(c.a.mark(function t(n,r){var o,s,i,u,l,m,f,v,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=new Date(Date.now()),s=d.a.firestore(),i=s.collection("events"),t.prev=3,n(Object(p.c)()),t.t0=e,!t.t0){t.next=10;break}return t.next=9,s.collection("events").doc(e.id).get();case 9:t.t0=t.sent;case 10:return u=t.t0,l=e?i.where("date",">=",o).orderBy("date").startAfter(u).limit(2):i.where("date",">=",o).orderBy("date").limit(2),t.next=14,l.get();case 14:if(0!==(m=t.sent).docs.length){t.next=18;break}return n(Object(p.b)()),t.abrupt("return",m);case 18:for(f=[],v=0;v<m.docs.length;v++)b=Object(a.a)({},m.docs[v].data(),{id:m.docs[v].id}),f.push(b);return n({type:h.c,payload:{events:f}}),n(Object(p.b)()),t.abrupt("return",m);case 25:t.prev=25,t.t1=t.catch(3),console.log(t.t1),n(Object(p.a)());case 29:case"end":return t.stop()}},t,null,[[3,25]])}));return function(e,n){return t.apply(this,arguments)}}()},w=function(e,t,n){return function(){var a=Object(o.a)(c.a.mark(function a(r,o,s){var i,l,d,p,h;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=s.getFirebase,l=i(),d=o().firebase.profile,p=l.auth().currentUser,h={parentId:n,displayName:d.displayName,photoURL:d.photoURL,uid:p.uid,text:t.comment,date:Date.now()},a.prev=5,a.next=8,l.push("event_chat/".concat(e),h);case 8:a.next=14;break;case 10:a.prev=10,a.t0=a.catch(5),console.log(a.t0),u.toastr.error("Oops","Problem adding comment");case 14:case"end":return a.stop()}},a,null,[[5,10]])}));return function(e,t,n){return a.apply(this,arguments)}}()}},825:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(129);t.a=function(e){var t=e.input,n=e.rows,a=(e.type,e.placeholder),o=e.meta,s=o.touched,i=o.error;return r.a.createElement(c.i.Field,{error:s&&!!i},r.a.createElement("textarea",Object.assign({},t,{placeholder:a,rows:n})),s&&i&&r.a.createElement(c.o,{basic:!0,color:"red"},i))}},968:function(e,t,n){"use strict";n.r(t);var a=n(806),r=n.n(a),c=n(807),o=n(153),s=n(154),i=n(156),u=n(155),l=n(157),d=n(0),p=n.n(d),h=n(129),m=n(158),f=n(159),v=n(130),b=n(77),g=n(818),E=n.n(g),w=n(30),y={filter:"brightness(30%)"},j={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},O=function(e){var t=e.loading,n=e.event,a=e.isHost,r=e.isGoing,c=e.goingToEvent,o=e.cancelGoingToEvent,s=e.authenticated,i=e.openModal;return p.a.createElement(h.t.Group,null,p.a.createElement(h.t,{basic:!0,attached:"top",style:{padding:"0"}},p.a.createElement(h.m,{src:"/assets/categoryImages/".concat(n.category,".jpg"),fluid:!0,style:y}),p.a.createElement(h.t,{basic:!0,style:j},p.a.createElement(h.n.Group,null,p.a.createElement(h.n,null,p.a.createElement(h.n.Content,null,p.a.createElement(h.k,{size:"huge",content:n.title,style:{color:"white"}}),p.a.createElement("p",null,E()(n.date,"dddd Do MMMM")),p.a.createElement("p",null,"Hosted by ",p.a.createElement("strong",null,n.hostedBy))))))),p.a.createElement(h.t,{attached:"bottom"},!a&&p.a.createElement("div",null,r&&!n.cancelled&&p.a.createElement(h.a,{onClick:function(){return o(n)}},"Cancel My Place"),!r&&s&&!n.cancelled&&p.a.createElement(h.a,{loading:t,onClick:function(){return c(n)},color:"teal"},"JOIN THIS EVENT"),!s&&!n.cancelled&&p.a.createElement(h.a,{loading:t,onClick:function(){return i("UnauthModal")},color:"teal"},"JOIN THIS EVENT"),n.cancelled&&!a&&p.a.createElement(h.o,{size:"large",color:"red",content:"This has been cancelled"})),a&&p.a.createElement(h.a,{as:w.b,to:"/manage/".concat(n.id),color:"orange"},"Manage Event")))},x=n(939),k=n.n(x),C=function(){return p.a.createElement(h.l,{name:"marker",size:"big",color:"red"})},U=function(e){var t=e.lat,n=e.lng,a=[t,n];return p.a.createElement(h.t,{attached:"bottom",style:{padding:0}},p.a.createElement("div",{style:{height:"300px",width:"100%"}},p.a.createElement(k.a,{bootstrapURLKeys:{key:"AIzaSyDUX8SIqI2_TkxTUFkNQeqIyO4urAqgrt0"},defaultCenter:a,defaultZoom:14},p.a.createElement(C,{lat:t,lng:n}))))},R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showMap:!1},n.showMapToggle=function(){n.setState(function(e){return{showMap:!e.showMap}})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({showMap:!1})}},{key:"render",value:function(){var e=this.props.event;return p.a.createElement(h.t.Group,null,p.a.createElement(h.t,{attached:"top"},p.a.createElement(h.j,null,p.a.createElement(h.j.Column,{width:1},p.a.createElement(h.l,{size:"large",color:"teal",name:"info"})),p.a.createElement(h.j.Column,{width:15},p.a.createElement("p",null,e.description)))),p.a.createElement(h.t,{attached:!0},p.a.createElement(h.j,{verticalAlign:"middle"},p.a.createElement(h.j.Column,{width:1},p.a.createElement(h.l,{name:"calendar",size:"large",color:"teal"})),p.a.createElement(h.j.Column,{width:15},p.a.createElement("span",null,E()(e.date,"dddd Do MMM")," at"," ",E()(e.date,"h:mm A"))))),p.a.createElement(h.t,{attached:!0},p.a.createElement(h.j,{verticalAlign:"middle"},p.a.createElement(h.j.Column,{width:1},p.a.createElement(h.l,{name:"marker",size:"large",color:"teal"})),p.a.createElement(h.j.Column,{width:11},p.a.createElement("span",null,e.venue)),p.a.createElement(h.j.Column,{width:4},p.a.createElement(h.a,{onClick:this.showMapToggle,color:"teal",size:"tiny",content:this.state.showMap?"Hide Map":"Show Map"})))),this.state.showMap&&p.a.createElement(U,{lat:e.venueLatLng.lat,lng:e.venueLatLng.lng}))}}]),t}(d.Component),D=n(838),I=n(837),L=n(825),F=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleCommentSubmit=function(e){var t=n.props,a=t.addEventComment,r=t.reset,c=t.eventId,o=t.closeForm,s=t.parentId;a(c,e,s),r(),0!==s&&o()},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement(h.i,{onSubmit:this.props.handleSubmit(this.handleCommentSubmit)},p.a.createElement(D.a,{name:"comment",type:"text",component:L.a,rows:2}),p.a.createElement(h.a,{content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0}))}}]),t}(d.Component),M=Object(I.a)({Fields:"comment"})(F),A=n(865),T=n.n(A),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showReplyForm:!1,selectedCommentId:null},n.handleCloseReplyForm=function(){n.setState({selectedCommentId:null,showReplyForm:!1})},n.handleOpenReplyForm=function(e){return function(){n.setState({showReplyForm:!0,selectedCommentId:e})}},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.addEventComment,a=t.eventId,r=t.eventChat,c=this.state,o=c.showReplyForm,s=c.selectedCommentId;return p.a.createElement("div",null,p.a.createElement(h.t,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"}},p.a.createElement(h.k,null,"Chat about this event")),p.a.createElement(h.t,{attached:!0},p.a.createElement(h.c.Group,null,r&&r.map(function(t){return p.a.createElement(h.c,{key:t.id},p.a.createElement(h.c.Avatar,{src:t.photoURL||"/assets/user.png"}),p.a.createElement(h.c.Content,null,p.a.createElement(h.c.Author,{as:w.b,to:"/profile/".concat(t.uid)},t.displayName),p.a.createElement(h.c.Metadata,null,p.a.createElement("div",null,T()(t.date,Date.now())," ago")),p.a.createElement(h.c.Text,null,t.text),p.a.createElement(h.c.Actions,null,p.a.createElement(h.c.Action,{onClick:e.handleOpenReplyForm(t.id)},"Reply"),o&&s===t.id&&p.a.createElement(M,{addEventComment:n,eventId:a,form:"reply_".concat(t.id),closeForm:e.handleCloseReplyForm,parentId:t.id}))),t.childNodes&&t.childNodes.map(function(t){return p.a.createElement(h.c.Group,{key:t.id},p.a.createElement(h.c,null,p.a.createElement(h.c.Avatar,{src:t.photoURL||"/assets/user.png"}),p.a.createElement(h.c.Content,null,p.a.createElement(h.c.Author,{as:w.b,to:"/profile/".concat(t.uid)},t.displayName),p.a.createElement(h.c.Metadata,null,p.a.createElement("div",null,T()(t.date,Date.now())," ago")),p.a.createElement(h.c.Text,null,t.text),p.a.createElement(h.c.Actions,null,p.a.createElement(h.c.Action,{onClick:e.handleOpenReplyForm(t.id)},"Reply"),o&&s===t.id&&p.a.createElement(M,{addEventComment:n,eventId:a,form:"reply_".concat(t.id),closeForm:e.handleCloseReplyForm,parentId:t.parentId})))))}))})),p.a.createElement(M,{parentId:0,addEventComment:n,eventId:a,form:"newComment"})))}}]),t}(d.Component),S=function(e){var t=e.attendees;return p.a.createElement("div",null,p.a.createElement(h.t,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal"},t&&t.length," ",t&&1===t.length?"Person":"People"," Going"),p.a.createElement(h.t,{attached:!0},p.a.createElement(h.p,{relaxed:!0,divided:!0},t&&t.map(function(e){return p.a.createElement(h.n,{key:e.id,style:{position:"relative"}},e.host&&p.a.createElement(h.o,{style:{position:"absolute"},color:"orange",ribbon:"right"},"Host"),p.a.createElement(h.n.Image,{size:"tiny",src:e.photoURL}),p.a.createElement(h.n.Content,{verticalAlign:"middle"},p.a.createElement(h.n.Header,{as:"h3"},p.a.createElement(w.b,{to:"/profile/".concat(e.id)},e.displayName))))}))))},_=n(814),P=n(817),B=n(819),G=n(292),z=n(62),H={goingToEvent:P.e,cancelGoingToEvent:P.a,addEventComment:B.a,openModal:G.b},q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={initialLoading:!0},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.firestore,a=t.match,e.next=3,n.get("events/".concat(a.params.id));case 3:return e.sent.exists||(f.toastr.error("Not Found","This is not the event are looking for"),this.props.history.push("/error")),e.next=7,n.setListener("events/".concat(a.params.id));case 7:this.setState({initialLoading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.firestore,a=t.match,e.next=3,n.unsetListener("events/".concat(a.params.id));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.openModal,n=e.event,a=e.auth,r=e.goingToEvent,c=e.cancelGoingToEvent,o=e.addEventComment,s=e.eventChat,i=e.loading,u=e.requesting,l=e.match,d=n&&n.attendees&&Object(_.c)(n.attendees).sort(function(e,t){return e.joinDate-t.joinDate}),m=n.hostUid===a.uid,f=d&&d.some(function(e){return e.id===a.uid}),b=!Object(v.isEmpty)(s)&&Object(_.a)(s),g=a.isLoaded&&!a.isEmpty;return u["events/".concat(l.params.id)]||this.state.initialLoading?p.a.createElement(z.a,{inverted:!0}):p.a.createElement(h.j,null,p.a.createElement(h.j.Column,{width:10},p.a.createElement(O,{event:n,loading:i,isHost:m,isGoing:f,goingToEvent:r,cancelGoingToEvent:c,authenticated:g,openModal:t}),p.a.createElement(R,{event:n}),g&&p.a.createElement(N,{addEventComment:o,eventId:n.id,eventChat:b})),p.a.createElement(h.j.Column,{width:6},p.a.createElement(S,{attendees:d})))}}]),t}(d.Component);t.default=Object(b.compose)(v.withFirestore,Object(m.connect)(function(e,t){var n={};return e.firestore.ordered.events&&e.firestore.ordered.events[0]&&(n=e.firestore.ordered.events[0]),{requesting:e.firestore.status.requesting,event:n,loading:e.async.loading,auth:e.firebase.auth,eventChat:!Object(v.isEmpty)(e.firebase.data.event_chat)&&Object(_.c)(e.firebase.data.event_chat[t.match.params.id])}},H),Object(v.firebaseConnect)(function(e){return["event_chat/".concat(e.match.params.id)]}))(q)}}]);
//# sourceMappingURL=14.bf5003c1.chunk.js.map
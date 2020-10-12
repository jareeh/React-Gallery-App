(this["webpackJsonpreact-gallery-app2"]=this["webpackJsonpreact-gallery-app2"]||[]).push([[0],{18:function(e,t,a){},31:function(e,t,a){e.exports=a(59)},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(18),a(9)),s=a(10),u=a(12),i=a(11),h=a(7),m=a(1),p=a(29),d=a.n(p),f=(a(53),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.query.value),e.props.history.push("/search/".concat(e.query.value)),t.currentTarget.reset()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",placeholder:"Search flikr....",ref:function(t){return e.query=t}}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},"Search"))}}]),a}(n.Component)),E=Object(m.g)(f),b=function(){return r.a.createElement("div",{className:"main-nav"},r.a.createElement("h4",null,"Quick Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/landscapes"},"Landscapes")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/forests"},"Forests")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/beaches"},"Beaches"))))},v=function(e){var t="https://live.staticflickr.com/".concat(e.data.server,"/").concat(e.data.id,"_").concat(e.data.secret,".jpg");return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:""}))},g=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h3",null,"No results found."),r.a.createElement("p",null,"That search did not return any results. Please try again."))},y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props.data;return e=t.length>0?t.map((function(e,a){return r.a.createElement(v,{data:t[a],key:a})})):r.a.createElement(g,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,e))}}]),a}(n.Component),k=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Error: Path not found"),r.a.createElement("p",null,"Try a new search or click one of the links above to go back to a known path."))},S="79fb7cac0887f2c4ccc82318a5cab5aa",j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,photos:[],landscapes:[],forests:[],beaches:[]},e.performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"landscapes";e.setState({loading:!0}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(S,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then((function(a){"landscapes"===t?e.setState({landscapes:a.data.photos.photo,loading:!1}):"forests"===t?e.setState({forests:a.data.photos.photo,loading:!1}):"beaches"===t?e.setState({beaches:a.data.photos.photo,loading:!1}):e.setState({photos:a.data.photos.photo,loading:!1})})).catch((function(e){console.log("Error with axios fetching data",e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.performSearch(),this.performSearch("forests"),this.performSearch("beaches")}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/react-gallery-app-V2"},r.a.createElement("div",null,r.a.createElement("h1",null,"Jeff's React Gallery App"),r.a.createElement(E,{onSearch:this.performSearch}),r.a.createElement(b,null),this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/landscapes"})}}),r.a.createElement(m.b,{path:"/landscapes",render:function(){return r.a.createElement(y,{data:e.state.landscapes})}}),r.a.createElement(m.b,{path:"/forests",render:function(){return r.a.createElement(y,{data:e.state.forests})}}),r.a.createElement(m.b,{path:"/beaches",render:function(){return r.a.createElement(y,{data:e.state.beaches})}}),r.a.createElement(m.b,{path:"/search/landscapes",render:function(){return r.a.createElement(m.a,{to:"/landscapes"})}}),r.a.createElement(m.b,{path:"/search/forests",render:function(){return r.a.createElement(m.a,{to:"/forests"})}}),r.a.createElement(m.b,{path:"/search/beaches",render:function(){return r.a.createElement(m.a,{to:"/beaches"})}}),r.a.createElement(m.b,{path:"/search/:query",render:function(){return r.a.createElement(y,{data:e.state.photos})}}),r.a.createElement(m.b,{component:k}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d052d0f4.chunk.js.map
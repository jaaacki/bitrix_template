{"version":3,"sources":["map.js"],"names":["BX","namespace","Bitrix24","SlidingPanel","options","this","containerClassName","container","create","props","className","overlayClassName","overlay","isOpen","header","menuItems","imBar","panel","creatorConfirmedPanel","animation","startParams","endParams","currentParams","bind","onContainerClick","addCustomEvent","onTopPanelCollapse","prototype","animateStep","state","setContent","open","document","proxy","onDocumentKeyUp","onDocumentClick","addEventListener","onHeaderClick","parentNode","body","appendChild","ZIndexManager","register","bringToFront","scrollSize","window","innerWidth","documentElement","clientWidth","style","paddingRight","right","zIndex","overflow","adjustPosition","stop","easing","duration","start","finish","transition","transitions","linear","step","complete","onTrasitionEnd","animate","close","immediately","unbind","removeEventListener","classList","remove","menuItemsPosition","pos","scrollTop","pageYOffset","bottom","top","add","unregister","removeChild","cssText","event","stopPropagation","keyCode","isParentForNode","target","match","GroupPanel","translateX","opacity","apply","arguments","ajaxPath","type","isNotEmptyString","siteId","message","menu","leftMenu","content","items","counter","intranetGroups","getElementsByClassName","extranetGroups","length","addClass","closeLink","filters","slice","call","i","filter","onFilterClick","onItemsClick","onMenuClick","closeImmediately","Object","constructor","super","transform","backgroundColor","onCustomEvent","pulse_loading","display","innerHTML","left","removeProperty","removeClass","filterElement","isDomNode","proxy_context","currentFilter","dataset","newFilter","saveFilter","delegate","hasClass","star","item","groupId","id","action","toggleClass","animateStart","animateCounter","ajax","runAction","data","preventDefault","flyingStar","cloneNode","marginLeft","offsetWidth","scale","positive","Map","translateY"],"mappings":"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","file":"map.map.js"}
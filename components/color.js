const Colors = {
	template:`
    <div>
	    <template v-for="(grp, gidx) in groups">
		    <div>{{grp.title}}</div>
		    <el-row :gutter="10">
		      <el-col v-for="(blk, bidx) in grp.blocks" v-bind:key="blk.name" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		      	<div class="cbox" :style="{background:blk.color,color:blk.txtcolor}">{{blk.name}}</div>
		      	<div><span :style="{color:blk.color}">bg:{{blk.color}}</span></div>
		      	<div v-if="blk.txtcolor!=undefined"><span :style="{color:blk.txtcolor}">text:{{blk.txtcolor}}</span></div>
		      </el-col>
		    </el-row>
	    </template>
    </div>
	`,
 	data: function(){
    	return {
          groups: [
        	{title: 'Text and Group 1', 
        		blocks : [{color:'#B11E31',name:'Christmas Red',txtcolor:'#ffcabb'},
        			{color:'#166138',name:'Pine Green',txtcolor:'#e8ac30'},
        			{color:'#F8AD1E',name:'Ripe Pumpkin',txtcolor:'#b32c18'},
        			{color:'#062639',name:'Sailor Blue',txtcolor:'#c5d3c6'},
        			{color:'#30BCC9',name:'Blue Curacao',txtcolor:'#edf5e8'},
        			{color:'#EED6BB',name:'Creamy Latte',txtcolor:'#2f663f'},
        			{color:'#C9D4C5',name:'Ash Grey',txtcolor:'#637359'},
        			{color:'#FAF3E3',name:'Whitewashed Fence',txtcolor:'#e9384c'},
        			{color:'#FADA80',name:'Golden Glow',txtcolor:'#ae7f0d'}
        		]
        	},
          {title: '紫色组', 
            blocks : [{color:'#867ba9',name:'紫苑'},
              {color:'#9079ad',name:'龟胆'},
              {color:'#a59aca',name:'藤紫'},
              {color:'#a69abd',name:'半色'},
              {color:'#c4a3bf',name:'浅紫'},
              {color:'#c0a2c7',name:'淡葡萄'},
              {color:'#a6a5c4',name:'藤鼠'},
              {color:'#dbd0e6',name:'白藤'}
            ]
          },
          {title: '春色组', 
            blocks : [{color:'#96ce54',name:'豆青'},
              {color:'#9ed048',name:'豆绿'},
              {color:'#9ed900',name:'葱绿'},
              {color:'#a3d900',name:'葱黄'},
              {color:'#afdd22',name:'柳绿'},
              {color:'#c9dd22',name:'柳黄'},
              {color:'#bddd22',name:'嫩绿'},
              {color:'#bce627',name:'松花'}
            ]
          }
          ]
    	}
    },
    mounted: function(){
	},
	methods:{
	}
};

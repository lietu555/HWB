define(['jquery'],function(jquery){
	function resetInput(Ipt,Reset){
		//当输入框获取焦点时键入或值改变或值不等于空时重置按钮显示
		Ipt.focus(function(){
			$(this).keydown(function(){
				$(this).next().next().css('display','block');
			});
			$(this).change(function(){
				$(this).next().next().css('display','block');
			});
			if ($(this).val()!=='') {	
				$(this).next().next().css('display','block');
			}
		});
		//当输入框失去焦点时隐藏
		Ipt.blur(function(){
				$(this).next().next().css('display','none');
		});
		//当重置按钮按下时清空输入框内容隐藏按钮
		Reset.on('mousedown',function(){
			$(this).prev().prev().val("");
			$(this).css({'display':'none'});
		});
	}

	//下拉菜单，传入下拉框div元素
	function downPull(obj){
		obj.on('click',function(){
			obj.find('.downbox').toggle();
		});
		obj.find('li').on('click',function(){
			obj.find('input').val($(this).html());
		});
	}
	//排序列表
	function sortList(obj){
		obj.on('click',function(){
			obj.css('color','#666');
			$(this).css('color','orange');
			if ($(this).attr('class')=='sort_list prise_sort') {
				$(this).attr('class','sort_list');
			}else{
				$(this).attr('class','sort_list prise_sort');
			}
		});
	}
	//点击选择按钮 为每个按钮添加一个btn类
	function toggleBtn(obj){
		obj.find('input.btn').on('click',function(){
			obj.find('input.btn').attr('class','btn default_btn');
			$(this).attr('class','btn active_btn');
		});
	}
	//展开显示地图
	function showMap(obj,Target){
		obj.on('click',function(){
			if ($(this).html()=='收起地图') {
				$(this).html('展开地图').attr('class','tog_map show_map');
				Target.slideUp();
			}else{
				$(this).html('收起地图').attr('class','tog_map hide_map');
				Target.slideDown();
			}
		});
	}
	function nowLocation(List,Inner){
		List.find('li').on('click',function(){
			Inner.find('span').html($(this).html());
			List.hide();
		});
		Inner.on('mouseover',function(){
			List.show();
		});
	}
	function listWidth(obj,win){
		var liLang=obj.find("li");
		obj.css('width',(liLang.outerWidth()+win)*liLang.length+'px');
	}
	return {
		resetInput:resetInput,
		downPull:downPull,
		sortList:sortList,
		toggleBtn:toggleBtn,
		showMap:showMap,
		nowLocation:nowLocation,
		listWidth:listWidth
	};

});
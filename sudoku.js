
$(function(){

		$("#clear").click(function(){
			$(".number").attr('value','');
			$(".number").css('color','');
		});
		$("#get").click(function(){
			//alert('111');
			var line1=$("#line1").find("input");
			var line2=$("#line2").find("input");
			var line3=$("#line3").find("input");
			var line4=$("#line4").find("input");
			var line5=$("#line5").find("input");
			var line6=$("#line6").find("input");
			var line7=$("#line7").find("input");
			var line8=$("#line8").find("input");
			var line9=$("#line9").find("input");
			var arr=[];
			var arr1=[];
			var arr2=[];
			var arr3=[];
			var arr4=[];
			var arr5=[];
			var arr6=[];
			var arr7=[];
			var arr8=[];
			var arr9=[];
			$.each(line1,function(i,v){
				arr1[i]=v.value;
			});
			$.each(line2,function(i,v){
				arr2[i]=v.value;
			});
			$.each(line3,function(i,v){
				arr3[i]=v.value;
			});
			$.each(line4,function(i,v){
				arr4[i]=v.value;
			});
			$.each(line5,function(i,v){
				arr5[i]=v.value;
			});
			$.each(line6,function(i,v){
				arr6[i]=v.value;
			});
			$.each(line7,function(i,v){
				arr7[i]=v.value;
			});
			$.each(line8,function(i,v){
				arr8[i]=v.value;
			});
			$.each(line9,function(i,v){
				arr9[i]=v.value;
			});
			arr=[arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9];
			$.ajax({
				type:'POST',
				dataType:"text",
			  	//url: "./solution.php",
			  	url: "./sudoku.php",
		   		data: {data:arr},
		   		success: function(data){
					//console.log(data);
					var obj = eval('(' + data + ')');
					var num=1;
					$.each(obj,function(i,v){
						$.each(v,function(key,value){
							//console.log(value);
							var now=$("#number"+num).val();
							if(!now){
								$("#number"+num).val(value);
								$("#number"+num).css('color','red');
							}
							
							num=num+1;
						});
					});
				}
			});
		});
	});
	function check(obj){ // 值允许输入一个小数点和数字
		obj.value = obj.value.replace(/[^1-9]\D*$/,""); //先把非数字的都替换掉，除了数字和.
		obj.value = obj.value.replace(/[0]/g,"");
		var currente_id=obj.id;//获取id值number1...
		var currente_id_value=currente_id.substr(6);//截取字符串中后面的数值
		var line1=$("#line1").find("input");
		var line2=$("#line2").find("input");
		var line3=$("#line3").find("input");
		var line4=$("#line4").find("input");
		var line5=$("#line5").find("input");
		var line6=$("#line6").find("input");
		var line7=$("#line7").find("input");
		var line8=$("#line8").find("input");
		var line9=$("#line9").find("input");
		var arr=[];
		var arr1=[];
		var arr2=[];
		var arr3=[];
		var arr4=[];
		var arr5=[];
		var arr6=[];
		var arr7=[];
		var arr8=[];
		var arr9=[];
		if(currente_id_value<=9){
			var row;
			var column;
			var columnarr=[];
			$.each(line1,function(i,v){
				row=$.inArray(v.value,arr1)
				//console.log(a);
				/*
				判断当前行是否有相同的数字
				*/
				if(row>=0 && v.value!=''){
					alert('数独的规则是同一行不能出现相同的数字');
					$("#number"+currente_id_value).val('');
				}else{
					arr1[i]=v.value;
				}
			});
			//console.log(arr1);
		}
	}
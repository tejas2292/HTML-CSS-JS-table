var $table = document.getElementById("myTable");
      let sortDirection = false;
      let n = 5;
      let tr = [];
      let i, ii, j = 0;
      const tableHead = document.getElementById('tableHead');
      const tableBody = document.getElementById('tableData');
      // create a div block to hold the buttons


      let personData = [
        {rank: 1, name: 'tejas', age: 21, occupation: 'Senior Engg'},
        {rank: 2, name: 'hemant', age: 30, occupation: 'Senior Engg'},
        {rank: 3, name: 'rushikesh', age: 28, occupation: 'HR'},
        {rank: 4, name: 'siddhesh', age: 23, occupation: 'Manager'},
        {rank: 5, name: 'yashraj', age: 18, occupation: 'Senior Engg'},
        {rank: 6, name: 'aniket', age: 17, occupation: 'Junior Engg'},
        {rank: 7, name: 'akshay', age: 14, occupation: 'Manager'},
        {rank: 8, name: 'popat', age: 31, occupation: 'Peon'},
        {rank: 9, name: 'prem', age: 11, occupation: 'Junior Engg'},
        {rank: 10, name: 'arun', age: 26, occupation: 'Developer'},
        {rank: 11, name: 'sohan', age: 24, occupation: 'Peon'},
        {rank: 12, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 13, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 14, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 15, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 16, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 17, name: 'raj', age: 18, occupation: 'Junior Engg'},
        {rank: 18, name: 'raj', age: 18, occupation: 'Junior Engg'},
      ];

      var rowCount = personData.length;
      pageRowChange();

      function pageRowChange() {
        var x = document.getElementById("leave").value;

        console.log(x);
        n = parseInt(x);
        
        
          var pageCount = Math.ceil(personData.length / n);
          if (pageCount >= 1) {
          // assign each row outHTML (tag name & innerHTML) to the array
          for (i = 0; i < rowCount; i++)
          {
            tr[i] = personData[i];
          }
            
          // the first sort, default page is the first one
          sort(1, pageCount);
          }
          
    }

      

     


      function sort(p, pageCount) {
	    /* create ($rows) a variable to hold the group of rows
    	** to be displayed on the selected page,
    	** ($s) the start point .. the first row in each page, Do The Math
    	*/
      //var s = ((n * p)-n);
	    let s = ((n * p)-n);
      let startNo = s + 1;
      rows = '';
      let lastNo;
      
	    for (i = s; i < (s+n) && i < tr.length; i++)
      {
        rows += `<tr><td>${tr[i].rank}</td><td>${tr[i].name}</td><td>${tr[i].age}</td><td>${tr[i].occupation}</td></tr>`;
      }

	
	    // now the table has a processed group of rows ..
	    tableBody.innerHTML = rows;
	    // create the pagination buttons
	    document.getElementById("buttons").innerHTML = pageButtons(pageCount,p);
      
	    // CSS Stuff
      document.getElementById("id"+p).setAttribute("class","active");

      lastNo = s+n;

      if(s+n < tr.length){
        lastNo = s+n;
      }
      else{
        lastNo = rowCount;
      }

      document.getElementById("infoRow").innerHTML = "Showing "+startNo+" to "+lastNo+" of "+ rowCount +" entries";

      }

      // ($pCount) : number of pages,($cur) : current page, the selected one ..
      function pageButtons(pCount,cur) {
	    /* this variables will disable the "Prev" button on 1st page
	    and "next" button on the last one */
      pCount = Math.ceil(personData.length / n);
	    let	prevDis = (cur == 1)?"disabled":"",
		  nextDis = (cur == pCount)?"disabled":"",
		  /* this ($buttons) will hold every single button needed
		  ** it will creates each button and sets the onclick attribute
		  ** to the "sort" function with a special ($p) number..
		  */
		  buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+(cur - 1)+")' "+prevDis+">";

	    for (i=1; i<=pCount;i++){
		    buttons += "<input type='button' id='id"+i+"'value='"+i+"' onclick='sort("+i+")'>";
      }
	      buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+(cur + 1)+")' "+nextDis+">";
	    return buttons;
}
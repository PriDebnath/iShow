 


 function SearchBox({searchVal ,setSearchVal,getData}) {
     
    return(
        <div className="searchbox">
        <input 
        value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
            getData();
          }}
          placeholder="Type to search ..."
        />
        </div>
    )
 }
 export default SearchBox
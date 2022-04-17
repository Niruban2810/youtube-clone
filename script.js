let api_key = "AIzaSyCntvUdewOgWhym8cW4dxxg6LNP1d6r1Ek";
let video_http="https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?";
fetch(video_http + new URLSearchParams ({
   key:api_key,
   part:'snippet',
   chart:'mostPopular',
   maxResults:1,
   regionCode:'IN'    
 }))
 
 .then(res=>res.json())
 .then(data=>{
       // console.log(data);
       data.items.forEach(items=>{
             getChannelIcon(items);
       })
 })
 .catch(err=>console.log(err));
 
 const getChannelIcon=(video_data)=>{
      fetch(channel_http + new URLSearchParams({
            key: api_key,
            part:'snippet',
            id:video_data.snippet.channelId 
       } )) 
       .then(res=>res.json())
            .then(data=>{
                  video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
                     console.log("video_data")
            })
 
       }

const userlist =document.querySelector('.user-list');
const sectionHeader   = 
`<div class="user-list"> 
      <div class ="header"> 
        <div class="header_left"> 
            <i class="material-icons">menu</i>
            <img src="file:///C:/Users/chakravarthy/Downloads/YouTube-Logo.wine.svg" alt="">
            </div>
            <div class="header_search">
            <form action = ""> 
            <input type="text" placeholder="search"/> 
           <button ><i class = "material-icon">search</i></button> </form>
            </div>
                <div class="header_icon">
                <i class="material-icons">videocam</i>
                <i class="material-icons">apps</i>
               <i class="material-icons">notifications</i>
               <i class="material-icons">account_circle</i>
            </div>  
         </div>   
      </div>
      
      <div class="mainBody">
       
         <div class="sidebar">
             <div class ="sidebar_catergories">
             <div class ="sidebar_catergory">
                    <i class="material-icons">home</i>
                      <span>home</span>
              </div>
               <div class ="sidebar_catergory">
                      <i class="material-icons">local_fire_department</i>
                       <span>Trendings</span>
              </div>
              <div class ="sidebar_catergory">
                      <i class="material-icons">subscriptions</i>
                      <span>subscriptions</span>
                </div>
                <div class ="sidebar_catergory">
                   <i class="material-icons">library_add_check</i>
                    <span>Library</span>
                  </div>
                
             <hr /> 
      
                  <div class ="sidebar_catergory">
                         <i class="material-icons">history</i>
                          <span>History</span>
                 </div>
                   <div class ="sidebar_catergory">
                         <i class="material-icons">play_arrow</i>
                         <span>Your Videos </span>
                   </div>
                  <div class ="sidebar_catergory">
                       <i class="material-icons">watch_later</i>
                       <span>watch later</span>
                 </div>
                 <div class ="sidebar_catergory">
                   <i class="material-icons">thumb_up</i>
                   <span>Liked Videos</span> 
                   </div>
                </div>
           </div> 
           <div class="video">
           <img src ="" class="thumbail" alt= "">
           <div class = "content"> <img src ="" class="icon" alt= "">
           </div>
           <h4 class="title"></h4>
           <p class ="channel-name"></p>
              </div>
                    </div>
     </div>
</div>`


userlist.innerHTML += sectionHeader

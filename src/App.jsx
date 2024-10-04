import { useEffect, useState } from 'react'
import MainList from './components/MainList/MainList'
import Message from './components/Message/Message';
import TopMenu from './components/TopMenu/TopMenu';
import { useNavigate } from 'react-router-dom';
function App() {

  const [note, setNote] = useState();
  const [current, setCurrent] = useState(-1);
  const [messageShow, setMessageShow] = useState(false)
  const [message, setMessage] = useState("Changes saved!")
  const [tag, setTag] = useState("all");

  useEffect(()=>{

  }, [tag])

  useEffect(() => {
    if (messageShow) {
      setTimeout(() => {
        setMessageShow(false);
      }, 1500);
    }
  }, [messageShow])

  const [items, setItems] = useState([
    { "note": "", "emoji": "📗", "title": "My fav books", "type": "bin", "category": "School", "subtitle": "" },
    { "note": "", "emoji": "🎁", "title": "Need birthday gift for cousin", "type": "bin", "category": "Family", "subtitle": "" },
    { "note": "", "emoji": "💻", "title": "Video game names", "type": "archived", "category": "Entertainment", "subtitle": "" },
    { "note": "", "emoji": "🏆", "title": "New year resolutions", "type": "archived", "category": "Entertainment", "subtitle": "" },
    { "note": "", "emoji": "🎞", "title": "Watchlist", "type": "archived", "category": "Family", "subtitle": "" },
    { "note": "", "emoji": "⚽", "title": "Sports", "type": "archived", "category": "Friends", "subtitle": "" },
    { "note": "", "emoji": "📗", "title": "My fav books", "category": "School", "subtitle": "" },
    { "note": "", "emoji": "🎁", "title": "Need birthday gift for cousin", "category": "Family", "subtitle": "" },
    { "note": "", "emoji": "💻", "title": "Video game names", "category": "Entertainment", "subtitle": "" },
    { "note": "", "emoji": "🏆", "title": "New year resolutions", "category": "Entertainment", "subtitle": "" },
    { "note": "", "emoji": "🎞", "title": "Watchlist", "category": "Family", "subtitle": "" },
  ]);


  function save() {
    if (current != -1) {
      setItems((all) => all.map((item, ind) => {
        if (ind == current) {
          return note
        }
        return item
      }))
    }
  }

  function showMessage(text){
    setMessage(text);
    setMessageShow(true);
  }

  function handleMenuItemClick(evt){
    setTag(evt.target.textContent);
  }

  function handleItemClick(index) {
    if (index !== current) {
      save();
      showMessage("Changes saved!");

      setNote(items[index]);
      setCurrent(index);
    }
  }

  function createNote() {
    showMessage("New note was created!")
    save();

    setItems(i => ([{}, ...i]))
    setNote({ "emoji": "🎇", "title": "", "note": "", "subtitle": "", "category": "" })
    setCurrent(0);
  }

  window.addEventListener("popstate", (evt)=>{
    evt.preventDefault();
    console.log("Back was clicked");
  })

  return (
    <div onKeyUp={(evt) => {
      
      if (evt.altKey && evt.key == "n") {
        createNote();
      }
    }
    } className='flex flex-col bg-black h-[100vh] font-mono text-white overflow-y-hidden'>
      <div className='flex items-center gap-12 py-6 p-4'>
        <span className='relative before:top before:-right-2 before:absolute flex items-center before:bg-white w-fit before:w-1 before:h-5 font-bold text-lg before:animate-blink cursor-pointer select-none'>
          asim.
        </span>

        

        {
          messageShow && <Message text={message} className='absolute right-4 bottom-4' />
        }

        <TopMenu onItemClick={handleMenuItemClick} selected={tag} values={["All", "Archived", "Bin"]}/>

      </div>


      <div className='flex  md:static h-full'>
        <div className='pl-2 pr-4 overflow-auto w-full md:w-auto min-w-[22rem]'>
          <button onClick={createNote}
            className="flex justify-center cursor-pointer w-full  border 
                        border-[#343434] px-4 py-1 
                        hover:border-[#7b7b7b] mb-4">+ New Note</button>

          <MainList values={items.filter(i=> {
            if(tag.toLowerCase() == "all"){
                return i
            }else{
              return i.type && i.type.toLowerCase() == tag.toLowerCase();
            }
          })} onItemClick={handleItemClick} />
        </div>

        {note && <div className='absolute md:static md:flex flex-col gap-8 
        bg-[url(./assets/appBackground.jpdg)] bg-black p-6 bg-contain'>

          <div className='flex items-center gap-4'>
            <div>
              <span className='text-2xl cursor-pointer hover:opacity-90 select-none'>{note.emoji}</span>
            </div>

            <div className='flex flex-col'>
              <input className='text-lgfont-semibold'
                value={note.title}
                placeholder='Title'
                onChange={(e) => { setNote(n => ({ ...n, title: e.target.value })) }}></input>

              <input onChange={(e) => { setNote(n => ({ ...n, subtitle: e.target.value })) }}
                placeholder='Subtitle'
                className='text-gray-300' value={note.subtitle}></input>
            </div>
          </div>

          <div>

            <textarea onChange={(e) => { setNote(n => ({ ...n, note: e.target.value })) }}
              value={note.note}
              rows={50}
              cols={100}
              placeholder='Text'
              className='w-full h-full overflow-hidden'>
            </textarea>

          </div>

        </div>}

        {
          !note && <span className='text-3xl hidden md:grid text-gray-500 flex-1 mb-32 place-items-center'>Create or Open a Note</span>
        }
      </div>
    </div>
  )
}

export default App

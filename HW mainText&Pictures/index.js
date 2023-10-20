

const arrText = [
    'Text 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, molestias.',
    'Text 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae commodi minus maxime dolorem magni exercitationem odit deleniti accusantium non voluptates!',
    'Text 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere explicabo illum soluta incidunt earum aperiam numquam possimus autem voluptate, maxime aliquam dolores sequi quaerat eligendi vero eius? Ipsa, ex!',
    'Text 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio pariatur sunt neque esse dolorem quo cumque modi in eius cupiditate, corporis assumenda a ut dolore distinctio error at perferendis. Eveniet, cupiditate. Corrupti veritatis consequatur quibusdam magnam nisi quas eos.',
    'Text 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius minima ullam fugit enim. Accusamus corporis eos aliquid laborum quae, velit consequuntur esse quos corrupti assumenda ea! Obcaecati distinctio natus ipsam provident, quas saepe quod autem blanditiis ad officia consequuntur omnis, quibusdam maxime! Ad doloremque, dicta a consequuntur neque praesentium?',
    'Text 6.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur asperiores exercitationem ratione nemo quam! In rerum excepturi quod perferendis maiores rem asperiores nulla ducimus dolorem accusamus impedit tempore aperiam numquam quos aliquid esse amet quibusdam repellendus odio provident necessitatibus, quam dolore labore vitae? Voluptatum alias impedit at facilis, velit quas officiis mollitia iusto fugit nisi ad vitae voluptas officia sapiente?',
    'Text 7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt impedit dolor voluptas distinctio esse doloremque commodi placeat dolores vero, tempora repudiandae? Delectus nisi amet magni molestias? Labore, aliquid minus! Quae aspernatur magnam incidunt eveniet, nisi porro veniam quisquam ut earum! Impedit ab nihil laboriosam odio laborum maxime ratione quia, ad totam ducimus temporibus excepturi inventore possimus harum quibusdam iure reiciendis tempora, voluptatibus perferendis tempore ea! Dignissimos aut consequuntur ab.',
    'Text 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum quod dicta id possimus dolorem ea molestias, asperiores aspernatur libero, necessitatibus suscipit enim adipisci ex esse quo minus vel laudantium. Quos laudantium eveniet molestias provident placeat unde neque libero at molestiae consequuntur, nihil maiores saepe aliquam soluta veritatis exercitationem sint error tempore quaerat quis delectus quibusdam odit. Ipsam in rem nulla ea optio alias culpa deleniti recusandae obcaecati dolores fuga ratione eum, soluta rerum pariatur dignissimos perspiciatis corporis! Culpa, itaque!'
];

const text_items = document.querySelector('.text_items');
const btn_items = document.querySelector('.btn_items');
const text = document.querySelector('.text');
text.innerHTML = arrText[0];

text_items.append(btn_items, text);


function renderBtns (array) {

    for (let i = 0; i < arrText.length; i++) {
        let btn = document.createElement('button');
        btn.innerText = 'Text' + (i + 1);
        btn_items.append(btn);

        btn.onclick = () => {
            text.innerHTML = array[i];
        }
    }
}

renderBtns(arrText);






const arr = ["https://w.forfun.com/fetch/b7/b704ee0e01f9e6cc673eb875fb1a20b9.jpeg",
"https://fikiwiki.com/uploads/posts/2022-02/thumbs/1644984077_3-fikiwiki-com-p-kartinki-zhivotnikh-na-avu-3.jpg",
"https://klike.net/uploads/posts/2019-11/1574514215_2.jpg",
"https://pibig.info/uploads/posts/2022-07/1657211357_2-pibig-info-p-krasivie-kartinki-na-telefon-babochki-2.jpg"
];

const img_items = document.querySelector('.img_items');
const smallImg = document.querySelector('.small_img');
const bigImg = document.querySelector('.big_img');
bigImg.src = arr[0];

img_items.append(bigImg, smallImg);

function renderPictures (array) {

    for (let i = 0; i < arr.length; i++) {
        let img = document.createElement('img');
        img.src = arr[i];
        smallImg.append(img);
      
        img.onclick = () => {
          bigImg.src = arr[i];
      
        }
      }
      
}

renderPictures(arr);

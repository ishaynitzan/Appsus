export const googleApi = {
    query
}

function query(searchWord){
    const myPromise = new Promise((resolve,reject)=>{
        if(true){
            // resolve(googleBooks)
            var words = searchWord.split(/(\s+)/).filter(word=>word!==" ").join('%20')
            resolve(axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${words}`))
        }else reject('error')
    })

    return myPromise;
}


const googleBooks = {
    "kind": "books#volumes",
    "totalItems": 514,
    "items": [
    {
    "kind": "books#volume",
    "id": "nBuA0hmspdMC",
    "etag": "pXxSAzKb8Pk",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
    "volumeInfo": {
    "title": "Effective JavaScript",
    "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
    "authors": [
    "David Herman"
    ],
    "publisher": "Addison-Wesley",
    "publishedDate": "2012-11-26",
    "description": "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780132902250"
    },
    {
    "type": "ISBN_10",
    "identifier": "0132902257"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 240,
    "printType": "BOOK",
    "categories": [
    "Computers"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "2.7.6.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "gg20DgAAQBAJ",
    "etag": "XMPzAcb/Cmg",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/gg20DgAAQBAJ",
    "volumeInfo": {
    "title": "Effective JavaScript 中文版(電子書)",
    "subtitle": "",
    "authors": [
    "David Herman"
    ],
    "publisher": "碁峰資訊股份有限公司",
    "publishedDate": "2013-07-29",
    "description": "駕馭 JavaScript 的 68 個具體作法 JavaScript 發明人 Brendan Eich 專文推薦 「少有程式語言達人能夠像 David 這樣寫出流暢通順且措辭淺白的文字，透過其深邃的洞察力，他以引人入勝的方式帶我們逐一探索 JavaScript 的語法和語意，一路提醒我們要特別注意的事項，並以實際的使用案例來補充說明，步調和緩而舒適。讀完此書後，你會對 JavaScript 有更穩健且透徹的理解。」 —Paul Irish，Google Chrome 的開發人員大使 「這本書並不適合那些尋找捷徑的人，這是刻苦獲得的經驗所提煉出來的精華。它是少數我會毫不猶豫推薦的 JavaScript 書籍。」 —Alex Russell，TC39 成員、Google 軟體工程師 為了真正精通 JavaScript，你必須知道如何有效運用這個語言富有彈性又具表達能力的特色，以及知道如何避免其中常見的陷阱。不管你已經撰寫了多久的 JavaScript 程式碼，Effective JavaScript 都能增進你對這個強大語言的理解，讓你能夠建置更容易預測、更可靠且更容易維護的程式。 作者 David Herman 具有 Ecma 的 JavaScript 標準化委員會數年的工作經驗，他以前所未見的深度闡明這個語言的內部運作原理，幫助你完全掌握 JavaScript 強大的表達能力。立基於 JavaScript 最新的幾個版本，本書提供經過充分驗證的技巧以及最佳實務做法，協助你為未來的開發工作做好準備。 Effective JavaScript 是由 68 個經過驗證、能夠幫助你寫出更好的 JavaScript 程式碼的具體作法所構成，並輔以實例來闡述說明。你會學到如何為每個專案挑選適當的程式寫作風格、管理無法預料的問題，並以更良好的方式來處理 JavaScript 程式設計的各個面向，諸如資料結構或共時性（concurrency）。關鍵的特色包括： ■ 以更好的方式來使用基於原型（prototype）的物件導向程式設計 ■ 使用陣列與字典（dictionary）物件時可能遭遇到的細微問題以及它們的解法 ■ 對 JavaScript 函式與變數範疇（variable scoping）語意的精確且務實的解說 ■ 實用的 JavaScript 程式設計模式與慣用語法，例如選項物件（options objects）及方法鏈串（method chaining） ■ 深入介紹 JavaScript 獨特的「run-to-completion」共時模型 David Herman，Mozilla Research 的資深研究員。他是 Ecma TC39 的成員，這個委員會負責 JavaScript 的標準化工作。他擁有 Grinnell College 的電腦科學學士學位，以及 Northeastern University 的電腦科學碩士與博士學位。 #碁峰資訊 GOTOP Information Inc.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9789862768921"
    },
    {
    "type": "ISBN_10",
    "identifier": "9862768924"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 244,
    "printType": "BOOK",
    "categories": [
    "Computers"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "zh-CN",
    "previewLink": "http://books.google.com/books?id=gg20DgAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=gg20DgAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8.html?hl=&id=gg20DgAAQBAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8-sample-pdf.acsm?id=gg20DgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=gg20DgAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "駕馭 JavaScript 的 68 個具體作法 JavaScript 發明人 Brendan Eich 專文推薦 「少有程式語言達人能夠像 David ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "yg0fBAAAQBAJ",
    "etag": "7/Wa7q3ywLc",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/yg0fBAAAQBAJ",
    "volumeInfo": {
    "title": "Effective JavaScript　JavaScriptを使うときに知っておきたい68の冴えたやり方",
    "authors": [
    "Devid Herman"
    ],
    "publisher": "翔泳社",
    "publishedDate": "2013-02-18",
    "description": "JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場！微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど！」は、伊達じゃない。",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9784798131115"
    },
    {
    "type": "ISBN_10",
    "identifier": "4798131113"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 202,
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "4.487.0.0.preview.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "ja",
    "previewLink": "http://books.google.com/books?id=yg0fBAAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=yg0fBAAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript_JavaScript%E3%82%92%E4%BD%BF%E3%81%86.html?hl=&id=yg0fBAAAQBAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=yg0fBAAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリー ..."
    }
    },
    {
    "kind": "books#volume",
    "id": "zvuGAQAACAAJ",
    "etag": "OaTPLtxwcaE",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/zvuGAQAACAAJ",
    "volumeInfo": {
    "title": "Effective Javascript",
    "subtitle": "30 Specific Ways to Harness the Power of Javascript",
    "authors": [
    "David Herman"
    ],
    "publishedDate": "2012",
    "industryIdentifiers": [
    {
    "type": "OTHER",
    "identifier": "OCLC:796839651"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 132,
    "printType": "BOOK",
    "categories": [
    "Electronic books"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=zvuGAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=zvuGAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_Javascript.html?hl=&id=zvuGAQAACAAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=zvuGAQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "lT2g_y4VYx0C",
    "etag": "2HTgVOTkrwU",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/lT2g_y4VYx0C",
    "volumeInfo": {
    "title": "Effective JavaScript",
    "authors": [
    "Devid Herman"
    ],
    "publisher": "翔泳社",
    "publishedDate": "2013-04-13",
    "description": "JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場!微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど!」は、伊達じゃない。 ※本電子書籍は同名出版物を底本とし作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9784798131528"
    },
    {
    "type": "ISBN_10",
    "identifier": "4798131520"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 202,
    "printType": "BOOK",
    "categories": [
    "Technology & Engineering"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "4.1329.533.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "ja",
    "previewLink": "http://books.google.com/books?id=lT2g_y4VYx0C&pg=PT3&dq=effective+javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=lT2g_y4VYx0C&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=lT2g_y4VYx0C"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-epub.acsm?id=lT2g_y4VYx0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-pdf.acsm?id=lT2g_y4VYx0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=lT2g_y4VYx0C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Authorized translation from the English language edition,entitled <b>EFFECTIVE JAVASCRIPT</b>: 68 SPECIFIC WAYSTO HARNESS THE POWER OF JAVASCRIPT,1st Edition,ISBN:978032181286 by HERMAN,DAVID, publishedby Pearson Education, Inc, publishing as&nbsp;..."
    }
    },
    {
    "kind": "books#volume",
    "id": "--gvDwAAQBAJ",
    "etag": "Exv6RENVMFQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/--gvDwAAQBAJ",
    "volumeInfo": {
    "title": "An Effective Guide to Modern JavaScript",
    "subtitle": "(ECMAScript 2017 / ES 8)",
    "authors": [
    "Chong Lip Phang"
    ],
    "publisher": "Chong Lip Phang",
    "publishedDate": "2017-08-08",
    "description": "ES8 was finalized in June 2017. This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ES8 and beyond, and illustrates all of them. - clearly explains advanced concepts such as closures, Proxy, generators, Promise, async functions, and Atomics. - covers OOP techniques -- classical JavaScript OOP, the new 'class' syntax, data encapsulation, multiple inheritance, abstract classes, object relay etc. - teaches you how to define and use iterators and various iterables. - turns you into an efficient JavaScript coder.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781974207923"
    },
    {
    "type": "ISBN_10",
    "identifier": "1974207927"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 127,
    "printType": "BOOK",
    "categories": [
    "Computers"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=--gvDwAAQBAJ&pg=PP3&dq=effective+javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=--gvDwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/An_Effective_Guide_to_Modern_JavaScript.html?hl=&id=--gvDwAAQBAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.com/books/download/An_Effective_Guide_to_Modern_JavaScript-sample-pdf.acsm?id=--gvDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    "webReaderLink": "http://play.google.com/books/reader?id=--gvDwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "<b>JavaScript</b> is indubitably one of the most important programming languages today. ... This book aims to impart to the readers, in the most <b>effective</b> way, comprehensive and up-to-date information about how to use <b>JavaScript</b>."
    }
    },
    {
    "kind": "books#volume",
    "id": "NmCTPQAACAAJ",
    "etag": "KRhUF0EW0KM",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/NmCTPQAACAAJ",
    "volumeInfo": {
    "title": "Effective Javascript",
    "authors": [
    "Kriesing",
    "Victoria Roberts"
    ],
    "publishedDate": "2009-04-15",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "013815791X"
    },
    {
    "type": "ISBN_13",
    "identifier": "9780138157913"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "language": "en",
    "previewLink": "http://books.google.com/books?id=NmCTPQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=NmCTPQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_Javascript.html?hl=&id=NmCTPQAACAAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=NmCTPQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    }
    },
    {
    "kind": "books#volume",
    "id": "W218yMY2MhcC",
    "etag": "1vxk4WaY6G0",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/W218yMY2MhcC",
    "volumeInfo": {
    "title": "Test-Driven JavaScript Development",
    "authors": [
    "Christian Johansen"
    ],
    "publisher": "Addison-Wesley Professional",
    "publishedDate": "2010-09-09",
    "description": "For JavaScript developers working on increasingly large and complex projects, effective automated testing is crucial to success. Test-Driven JavaScript Development is a complete, best-practice guide to agile JavaScript testing and quality assurance with the test-driven development (TDD) methodology. Leading agile JavaScript developer Christian Johansen covers all aspects of applying state-of-the-art automated testing in JavaScript environments, walking readers through the entire development lifecycle, from project launch to application deployment, and beyond. Using real-life examples driven by unit tests, Johansen shows how to use TDD to gain greater confidence in your code base, so you can fearlessly refactor and build more robust, maintainable, and reliable JavaScript code at lower cost. Throughout, he addresses crucial issues ranging from code design to performance optimization, offering realistic solutions for developers, QA specialists, and testers. Coverage includes • Understanding automated testing and TDD • Building effective automated testing workflows • Testing code for both browsers and servers (using Node.js) • Using TDD to build cleaner APIs, better modularized code, and more robust software • Writing testable code • Using test stubs and mocks to test units in isolation • Continuously improving code through refactoring • Walking through the construction and automated testing of fully functional software The accompanying Web site, tddjs.com, contains all of the book’s code listings and additional resources.",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9780321684059"
    },
    {
    "type": "ISBN_10",
    "identifier": "0321684052"
    }
    ],
    "readingModes": {
    "text": true,
    "image": true
    },
    "pageCount": 480,
    "printType": "BOOK",
    "categories": [
    "Computers"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.8.6.0.preview.3",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=W218yMY2MhcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=W218yMY2MhcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=W218yMY2MhcC&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=W218yMY2MhcC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Test_Driven_JavaScript_Development.html?hl=&id=W218yMY2MhcC"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=W218yMY2MhcC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "Test-Driven JavaScript Development is a complete, best-practice guide to agile JavaScript testing and quality assurance with the test-driven development (TDD) methodology."
    }
    },
    {
    "kind": "books#volume",
    "id": "wD63DwAAQBAJ",
    "etag": "5ys0fjDJbYc",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/wD63DwAAQBAJ",
    "volumeInfo": {
    "title": "Effective TypeScript",
    "subtitle": "62 Specific Ways to Improve Your TypeScript",
    "authors": [
    "Dan Vanderkam"
    ],
    "publisher": "O'Reilly Media",
    "publishedDate": "2019-10-17",
    "description": "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript. Author Dan Vanderkam, a principal software engineer at Sidewalk Labs, shows you how to apply these ideas, following the format popularized by Effective C++ and Effective Java (both from Addison-Wesley). You’ll advance from a beginning or intermediate user familiar with the basics to an advanced user who knows how to use the language well. Effective TypeScript is divided into eight chapters: Getting to Know TypeScript TypeScript’s Type System Type Inference Type Design Working with any Types Declarations and @types Writing and Running Your Code Migrating to TypeScript",
    "industryIdentifiers": [
    {
    "type": "ISBN_13",
    "identifier": "9781492053712"
    },
    {
    "type": "ISBN_10",
    "identifier": "1492053716"
    }
    ],
    "readingModes": {
    "text": false,
    "image": true
    },
    "pageCount": 264,
    "printType": "BOOK",
    "categories": [
    "Computers"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.3.0.0.preview.1",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=wD63DwAAQBAJ&pg=PA216&dq=effective+javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=wD63DwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Effective_TypeScript.html?hl=&id=wD63DwAAQBAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=wD63DwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "JavaScript&#39;s var has some famously quirky scoping rules. If you&#39;re curious to learn more about them, read <b>Effective JavaScript</b>. But better to avoid var and not worry! Instead, use let and const. They&#39;re truly block-scoped and work in&nbsp;..."
    }
    },
    {
    "kind": "books#volume",
    "id": "MjXOAQAACAAJ",
    "etag": "ZlNaHPSuI5Y",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/MjXOAQAACAAJ",
    "volumeInfo": {
    "title": "JavaScript",
    "subtitle": "2 Books in 1: Beginner's Guide + Best Practices to Programming Code with JavaScript",
    "authors": [
    "Charlie Masterson"
    ],
    "publisher": "Createspace Independent Publishing Platform",
    "publishedDate": "2017-03-07",
    "description": "JavaScript Best Seller: 2 Books In 1! Own this Best-Selling JavaScript Computer Programming Bundle that contains: JavaScript: Beginner's Guide to Programming Code with JavaScript JavaScript: Best Practices to Programming Code with JavaScript For a limited time only, get to own this Amazon top seller for just $21.00! Regularly priced at $30.76. Save time and money by learning the basic essentials of JavaScript AND how to write better and more efficient JavaScript code - all in 1 book! Learn JavaScript programming today and begin your path towards JavaScript programming mastery! Book 1 - JavaScript: Beginner's Guide to Programming Code with JavaScript In the Definitive JavaScript Beginner's Guide, you're about to discover how to... Program code in JavaScript through learning the core essentials that every JavaScript programmer must know. JavaScript is on the internet everywhere we look. Thanks to JavaScript, many of the sites that you enjoy are able to run the way that they are supposed to. And when you understand how JavaScript works, you are going to have the advantage of knowing how websites function effectively. Here is a Preview of What You'll Learn... Essentials of JavaScript programming. Quickly pick up the code examples found on the book and start learning the concepts as you code Major aspects of JavaScript programming - including concepts that are found on other computer languages Various mechanics of JavaScript programming: variables, conditional statements, etc. and why learning these core principles are important to JavaScript programming success How JavaScript and HTML are able to effectively work together to create better web pages ... And much, much more! Added Benefits of owning this book: Get a better understanding of the JavaScript programming language Learn the basic building blocks of the JavaScript programming language Learn how to write effective and efficient JavaScript code for programming success and continue your progress towards JavaScript programming mastery! JavaScript: Best Practices to Programming Code with JavaScript In this Definitive JavaScript Guide on Best Practices, you're about to discover how to... Code more efficiently for Better Performance and Results! Spot the Common JavaScript Mistakes - From mismatched quotes, bad line breaks, HTML conflicts and more! Apply Recommended JavaScript approaches - The DO's and DONT's of JavaScript programming that will help you code achieve its goals immensely! Use Comments and Logging - the proper way to use comments and logging approaches that readers would thank you for! ... And much, much more! Added Benefits of owning this book: Gain a better grasp of efficient and effective JavaScript code to achieve programming success Speed up your programming abilities by avoiding time-wasting mistakes Gain the most important Best Practice concepts in your path towards JavaScript programming mastery! Learning JavaScript can help you in many ways both professionally and personally. By implementing the lessons in this book, not only would you learn one of today's most popular computer languages, but it will serve as your guide in accomplishing your JavaScript goals - whether as a fun hobby or as a starting point into a successful and long term Web Development career. Take action today and reach your JavaScript programming goals. Own this book today for a limited time discount! Scroll to the top of the page and select the 'Buy now' button.",
    "industryIdentifiers": [
    {
    "type": "ISBN_10",
    "identifier": "1544267444"
    },
    {
    "type": "ISBN_13",
    "identifier": "9781544267449"
    }
    ],
    "readingModes": {
    "text": false,
    "image": false
    },
    "pageCount": 178,
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
    },
    "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=MjXOAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=MjXOAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=MjXOAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=MjXOAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript.html?hl=&id=MjXOAQAACAAJ"
    },
    "saleInfo": {
    "country": "IL",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
    },
    "accessInfo": {
    "country": "IL",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
    "isAvailable": false
    },
    "pdf": {
    "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=MjXOAQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
    },
    "searchInfo": {
    "textSnippet": "And when you understand how JavaScript works, you are going to have the advantage of knowing how websites function effectively. Here is a Preview of What You&#39;ll Learn... Essentials of JavaScript programming."
    }
    }
    ]
    }
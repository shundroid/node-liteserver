# Node-LiteServer
## 特徴
- コードを最小限に抑えたサーバーです。
- しかし、いちいちreq.urlを判別することなく、`public/`フォルダ内のファイルをすべてサーバー内にいれます。
## MIME
今のところ対応しているのは、次の通りです。
- html
- css
- javascript
- json
- png
- jpeg
- gif
  
main.jsない、contentTypesに、`<拡張子>: <MIME タイプ>`という形式で書くと、追加することができます。
import { Layout, Input } from 'antd';
import { React, useState } from "react";

const { Header } = Layout;

export default function SeachArticle({ lungArticles, setSearchData, setIsSearch, paginate }) {
    const [search, setSearch] = useState('');
    const searchArticle = () => {
        const trimmedSearch = search.trim(); 
  
        if (trimmedSearch) {
          setSearchData(
            lungArticles.filter((lungArticle) => {
                if(lungArticle.Heading_title.toLowerCase().includes(search.toLowerCase())){
                    return true;
                }else if(lungArticle.Abstract.toLowerCase().includes(search.toLowerCase())){
                    return true;
                }else{
                    return false;
                } 
            }
            )
          );
        } else {
          setSearchData([]);
        }
        setIsSearch(true);
        paginate(1);
        setSearch("");
      };
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//         searchArticle();
//     }
//   };

  return (
    <Header className="site-layout-background" style={{ padding: 10 }}>
      <Input.Search
        placeholder="Tìm kiếm theo title/Abstract"
        onSearch={searchArticle}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        // onKeyPress={handleKeyPress}//Enter thì thực hiện hàm handleKeyPress
        style={{ margin: '10px 0' }}
      />
    </Header>
  );
}

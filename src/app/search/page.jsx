const Search= async({ searchParams})=>{
    const searchTerm= searchParams.q
    return<>
        searc Page = {searchTerm}
    </>
}
export default Search;
export const generateMetadata = ({ searchParams }) => {
    const searchTerm = searchParams?.q;
    return {
      title: `Search - ${searchTerm}`,
      description: "LearnGraduation is owned and dev. by AgniPro",
      keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
    };
  };
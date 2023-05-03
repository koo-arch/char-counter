const counter = (props) => {
  const text = props.text;
  const delLineFeed = text.replace(/\r?\n/g, '')
  const charCount = delLineFeed.length
  
  return (
    <div>
      <p>{ charCount }文字</p>
    </div>
  )
};

export default counter;
function SkillList({ src, skill}) {
  return (
    <span>
    <img src={src} alt='Check icon' />
    <p>{skill}</p>
</span>
  )
}

export default SkillList


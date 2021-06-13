const filterTechData = techData => {
  const filteredTechData = techData.filter(tech => tech.gifs.length > 0);
  const cleanedTechData = filteredTechData.map(techSkill => {
      return {
        'description': techSkill.description,
        'gifs': techSkill.gifs,
        'id': techSkill.id,
        'inputs': techSkill.inputs,
        'tech': techSkill.tech,
      }
  });
  return cleanedTechData
}

export { filterTechData };

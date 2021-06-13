const filterTechData = techData => {
  const filteredTechData = techData.map(tech => {
    if(tech.gifs.length){
      return {
        'description': tech.description,
        'gifs': tech.gifs,
        'id': tech.id,
        'inputs': tech.inputs,
        'tech': tech.tech,
      }
    }
  });
  return filteredTechData;
}

export { filterTechData };

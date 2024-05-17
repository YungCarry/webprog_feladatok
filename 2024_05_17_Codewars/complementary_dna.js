function dnaStrand(dna) {
    const complementMap = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    return dna.split('').map(nucleotide => complementMap[nucleotide]).join('');
  }
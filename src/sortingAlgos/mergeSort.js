
 function MergeSortSequence(array) {
    const Sequences = []
    if (array.length <= 1) return array
    const auxiliaryArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, Sequences)
    return Sequences
  }
  
  function mergeSortHelper( mainArray, startIdx, endIdx, auxiliaryArray, Sequences,) 
  {
    if (startIdx === endIdx) return
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, Sequences)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, Sequences)
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, Sequences)
  }
  
  function doMerge( mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, Sequences,) 
  {
    let k = startIdx
    let i = startIdx
    let j = middleIdx + 1
    while (i <= middleIdx && j <= endIdx) {

      Sequences.push([i, j, "comp"])
      Sequences.push([i, j, "comp"])
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        Sequences.push([k, auxiliaryArray[i], "over"])
        mainArray[k++] = auxiliaryArray[i++]
      } else {
        Sequences.push([k, auxiliaryArray[j], "over"])
        mainArray[k++] = auxiliaryArray[j++]
      }
    }
    while (i <= middleIdx) {
      Sequences.push([i, i, "comp"])
      Sequences.push([i, i, "comp"])
      Sequences.push([k, auxiliaryArray[i]])
      mainArray[k++] = auxiliaryArray[i++]
    }
    while (j <= endIdx) {
      Sequences.push([j, j, "comp"])
      Sequences.push([j, j, "comp"])
      Sequences.push([k, auxiliaryArray[j], "over"])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
   export default MergeSortSequence
function QuickSortSequence (array)  
{  
    const Sequence = []
    const a = array.slice()
    const low = 0, high = array.length-1
    quickSortHelper(a, low, high, Sequence)
    return Sequence
}

function quickSortHelper (a, low, high, Sequence)
{
    if (low < high)  
    {  
        const pi = partition(a, low, high, Sequence);  
        quickSortHelper(a, low, pi - 1, Sequence);  
        quickSortHelper(a, pi + 1, high, Sequence);  
    }
}

function partition(a, low, high, Sequence) {
    let pivot = a[high];   
    let i = (low - 1);  
  
    for (let j = low; j <= high - 1; j++)  
    {  
        Sequence.push([j, high, "comp"])
        if (a[j] < pivot)  
        {  
            i++; // increment index of smaller element  
            let temp = a[i]
            a[i] = a[j]
            a[j] = temp  
            Sequence.push([i, j, "swap"])
        }  
        Sequence.push([j, high, "comp"])
    }  
    let temp = a[i+1]
    a[i+1] = a[high]
    a[high] = temp 
    Sequence.push([i+1, high, "swap"]) 
    return (i + 1);  
}

export default QuickSortSequence
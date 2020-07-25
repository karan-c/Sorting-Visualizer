
function BubbleSortAnimation (array) {

    const sequence = []
    const n = array.length
    const a = array.slice()
    for(let i = 0; i < n; i++)
    {
        for(let j=0; j < n-i-1 ;j++)
        {
            sequence.push([j,j+1,"comp"])
            if(a[j] > a[j+1])
            {
                sequence.push([j,j+1,"swap"])
                
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
            sequence.push([j,j+1,"comp"])
        }
    }
    array = array.slice().sort()
   // console.log("Truth: ", a)
    return sequence
}

export default BubbleSortAnimation

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let area = 0 

    while (left < right){
        checkWidth = right - left 
        let minHeight = Math.min(height[left], height[right])
        let new_area = checkWidth * minHeight
        area = Math.max(area, new_area)

        if(height[left] > height[right]){
            right--
        }else{
            left++
        }
    }

    return area
}
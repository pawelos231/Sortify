# Sortify: Sorting Algorithms Visualizer Documentation

Welcome to **Sortify**, a powerful sorting algorithms visualizer that allows you to explore and understand various sorting algorithms through interactive visualizations. With Sortify, you can witness the inner workings of classic sorting algorithms and gain insights into their efficiencies. This documentation will provide you with an overview of the sorting algorithms available in Sortify, along with a brief explanation of each algorithm's complexity and characteristics.

## Algorithms Available:

### 1. Bubble Sort:

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated for each element until the entire array is sorted.

- Time Complexity:
  - Worst-case: O(n^2)
  - Best-case: O(n) (with optimizations)
- Space Complexity: O(1)
- Characteristics: Easy to understand, but inefficient for large datasets.

### 2. Bitonic Sort:

Bitonic Sort is an efficient parallel sorting algorithm that works by dividing the array into two parts—each part is sorted in the same direction, and then the entire array is merged to achieve a globally sorted array.

- Time Complexity:
  - Worst-case: O(n\*log^2(n))
  - Best-case: O(n\*log^2(n))
- Space Complexity: O(log^2(n))
- Characteristics: Well-suited for parallel processing environments.

### 3. Selection Sort:

Selection Sort is a simple in-place comparison-based sorting algorithm. It repeatedly selects the minimum element from the unsorted part of the array and places it at the beginning of the sorted part.

- Time Complexity:
  - Worst-case: O(n^2)
  - Best-case: O(n^2)
- Space Complexity: O(1)
- Characteristics: Easy to understand, but inefficient for large datasets.

### 4. Insertion Sort:

Insertion Sort is a simple in-place comparison-based sorting algorithm. It builds the final sorted array one element at a time by repeatedly inserting unsorted elements into the sorted part of the array.

- Time Complexity:
  - Worst-case: O(n^2)
  - Best-case: O(n)
- Space Complexity: O(1)
- Characteristics: Efficient for small datasets or partially sorted arrays.

### 5. Quick Sort:

Quick Sort is a widely used comparison-based sorting algorithm. It partitions the array into two sub-arrays, elements less than a chosen pivot and elements greater than the pivot, and then recursively sorts these sub-arrays.

- Time Complexity:
  - Worst-case: O(n^2) (rare)
  - Best-case: O(n\*log(n))
- Space Complexity: O(log(n))
- Characteristics: Efficient in practice, but susceptible to poor pivot choice.

### 6. Merge Sort:

Merge Sort is a stable, comparison-based sorting algorithm that divides the array into two halves, recursively sorts them, and then merges them to achieve a fully sorted array.

- Time Complexity: O(n\*log(n))
- Space Complexity: O(n)
- Characteristics: Consistently good performance and stability.

### 7. Heap Sort:

Heap Sort is a comparison-based sorting algorithm that builds a binary heap from the array and repeatedly extracts the maximum element from the heap to build the sorted array.

- Time Complexity: O(n\*log(n))
- Space Complexity: O(1)
- Characteristics: Efficient and in-place but requires understanding of binary heaps.

## Array Size and Visualization:

Sortify allows you to create arrays of up to 2000 elements. The sorting process is visually represented on the screen, helping you grasp the step-by-step transformations each algorithm applies to the data. By interacting with Sortify, you can better understand the differences in performance and behavior among these sorting algorithms.

## Visualization Speeds:

Sortify offers a range of visualization speeds to tailor your experience:

- Ultra Fast: 4ms per swap
- Faster: 8ms per swap
- Fast: 15ms per swap
- Average: 20ms per swap
- Slow: 30ms per swap
- Slower: 50ms per swap
- Ultra Slow: 250ms per swap

For the most detailed experience, choose lower time options. This allows you to observe every step of the sorting process.

## Sound Feature:

Sortify supports a sound-making feature that enhances your experience. Sounds are generated during sorting operations, giving you both a visual and auditory understanding of the algorithms in action.

## Conclusion:

Sortify provides a unique opportunity to visualize the inner workings of various sorting algorithms. Whether you are a beginner looking to learn about sorting or an experienced programmer aiming to compare algorithm efficiencies, Sortify offers an engaging platform to explore the fascinating world of sorting algorithms. Enjoy the experience and happy sorting!

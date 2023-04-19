function convert(arr) {
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    for (const k of Object.keys(obj)) {
      if (k === 'ID' || k === 'Level' || k === 'Color') continue;
      arr[i][k] = Number(obj[k]);
    }
  }
  console.log(JSON.stringify(arr));
}

// convert(arr)

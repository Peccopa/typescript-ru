{
  const dataFromControl = {
    water: 200,
    el: 350,
  };

  function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
      water: 200,
      el: 350,
    };

    return JSON.stringify(data) === JSON.stringify(dataFromUser);
  }

  console.log(checkReadings(dataFromControl));

  const PI = 3.14;
  let PIClone: typeof PI;
}

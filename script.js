document.getElementById('farmerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const soil = document.getElementById('soil').value.toLowerCase();
    const temperature = parseInt(document.getElementById('temperature').value);
    const water = parseInt(document.getElementById('water').value);

    const crops = [
        // Original crops (from your list)
        { name: 'Wheat', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 50, steps: ['Prepare soil', 'Plant seeds', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Rice', soil: 'high', tempMin: 20, tempMax: 30, waterMin: 80, steps: ['Flood the field', 'Sow seeds', 'Maintain water level', 'Harvest after 4 months'] },
        { name: 'Millets', soil: 'low', tempMin: 20, tempMax: 35, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Minimal watering', 'Harvest after 3 months'] },
        { name: 'Sugarcane', soil: 'high', tempMin: 21, tempMax: 27, waterMin: 120, steps: ['Plow field', 'Plant setts', 'Irrigate weekly', 'Harvest after 12 months'] },
        { name: 'Cotton', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 40, steps: ['Prepare soil', 'Plant seeds', 'Water sparingly', 'Harvest after 6 months'] },
        { name: 'Jowar', soil: 'medium', tempMin: 25, tempMax: 35, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Water sparingly', 'Harvest after 4 months'] },
        { name: 'Maize', soil: 'medium', tempMin: 21, tempMax: 27, waterMin: 50, steps: ['Prepare soil', 'Plant seeds', 'Water weekly', 'Harvest after 3 months'] },
        { name: 'Tur (Pigeon Pea)', soil: 'low', tempMin: 20, tempMax: 30, waterMin: 60, steps: ['Prepare soil', 'Plant seeds', 'Water bi-weekly', 'Harvest after 6 months'] },
        { name: 'Groundnut', soil: 'low', tempMin: 22, tempMax: 30, waterMin: 40, steps: ['Plow field', 'Plant seeds', 'Water sparingly', 'Harvest after 4 months'] },
        { name: 'Soybean', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 60, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Chickpea (Gram)', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 50, steps: ['Prepare soil', 'Plant seeds', 'Water occasionally', 'Harvest after 4 months'] },
        { name: 'Banana', soil: 'high', tempMin: 25, tempMax: 30, waterMin: 100, steps: ['Prepare soil', 'Plant saplings', 'Water weekly', 'Harvest after 12 months'] },
        { name: 'Onion', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 50, steps: ['Prepare beds', 'Plant bulbs', 'Water weekly', 'Harvest after 4 months'] },
        { name: 'Potato', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Plant tubers', 'Water sparingly', 'Harvest after 3 months'] },
        { name: 'Tomato', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 50, steps: ['Prepare beds', 'Plant seedlings', 'Water weekly', 'Harvest after 3 months'] },
        { name: 'Brinjal', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Plant seedlings', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Chilli', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 40, steps: ['Prepare soil', 'Plant seedlings', 'Water sparingly', 'Harvest after 3 months'] },
        { name: 'Coriander', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 30, steps: ['Prepare beds', 'Sow seeds', 'Water regularly', 'Harvest after 2 months'] },
        { name: 'Turmeric', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 80, steps: ['Prepare soil', 'Plant rhizomes', 'Water weekly', 'Harvest after 8 months'] },
        { name: 'Mango', soil: 'high', tempMin: 25, tempMax: 35, waterMin: 100, steps: ['Prepare pits', 'Plant saplings', 'Water bi-weekly', 'Harvest after 3 years'] },
        { name: 'Guava', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 80, steps: ['Prepare pits', 'Plant saplings', 'Water weekly', 'Harvest after 2 years'] },
        { name: 'Papaya', soil: 'medium', tempMin: 22, tempMax: 30, waterMin: 60, steps: ['Prepare soil', 'Plant seedlings', 'Water weekly', 'Harvest after 8 months'] },
        { name: 'Pomegranate', soil: 'low', tempMin: 20, tempMax: 30, waterMin: 50, steps: ['Prepare pits', 'Plant saplings', 'Water sparingly', 'Harvest after 2 years'] },
        { name: 'Custard Apple', soil: 'low', tempMin: 20, tempMax: 35, waterMin: 30, steps: ['Prepare pits', 'Plant saplings', 'Water sparingly', 'Harvest after 2 years'] },
        { name: 'Chiku (Sapota)', soil: 'high', tempMin: 25, tempMax: 30, waterMin: 100, steps: ['Prepare pits', 'Plant saplings', 'Water weekly', 'Harvest after 2 years'] },
        // Additional crops (from 21 to 100)
        { name: 'Apple', soil: 'high', tempMin: 5, tempMax: 20, waterMin: 60, steps: ['Prepare pits', 'Plant trees', 'Water weekly', 'Harvest after 2 years'] },
        { name: 'Pear', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 50, steps: ['Prepare soil', 'Plant saplings', 'Water regularly', 'Harvest after 1 year'] },
        { name: 'Peach', soil: 'medium', tempMin: 15, tempMax: 30, waterMin: 60, steps: ['Prepare soil', 'Plant trees', 'Water weekly', 'Harvest after 1 year'] },
        { name: 'Apricot', soil: 'medium', tempMin: 15, tempMax: 30, waterMin: 50, steps: ['Prepare pits', 'Plant saplings', 'Water weekly', 'Harvest after 1 year'] },
        { name: 'Plum', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Plant saplings', 'Water regularly', 'Harvest after 1 year'] },
        { name: 'Grapes', soil: 'high', tempMin: 18, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Plant vines', 'Water regularly', 'Harvest after 1 year'] },
        { name: 'Strawberry', soil: 'high', tempMin: 10, tempMax: 25, waterMin: 50, steps: ['Prepare beds', 'Plant runners', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Blueberry', soil: 'high', tempMin: 10, tempMax: 20, waterMin: 60, steps: ['Prepare acidic soil', 'Plant bushes', 'Water regularly', 'Harvest after 2 years'] },
        { name: 'Blackberry', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 50, steps: ['Prepare beds', 'Plant canes', 'Water regularly', 'Harvest after 1 year'] },
        { name: 'Raspberry', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 50, steps: ['Prepare beds', 'Plant canes', 'Water regularly', 'Harvest after 1 year'] },
        { name: 'Cucumber', soil: 'medium', tempMin: 18, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Pumpkin', soil: 'medium', tempMin: 20, tempMax: 35, waterMin: 60, steps: ['Prepare soil', 'Plant seeds', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Zucchini', soil: 'medium', tempMin: 15, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Plant seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Cauliflower', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Plant seedlings', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Broccoli', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 50, steps: ['Prepare soil', 'Plant seedlings', 'Water regularly', 'Harvest after 4 months'] },
        { name: 'Lettuce', soil: 'medium', tempMin: 10, tempMax: 20, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 2 months'] },
        { name: 'Spinach', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 2 months'] },
        { name: 'Carrot', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Radish', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 2 months'] },
        { name: 'Beetroot', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Sweet Corn', soil: 'medium', tempMin: 18, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Chili Pepper', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Plant seedlings', 'Water sparingly', 'Harvest after 4 months'] },
        { name: 'Green Beans', soil: 'medium', tempMin: 15, tempMax: 30, waterMin: 50, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Peas', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Sow seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Asparagus', soil: 'high', tempMin: 15, tempMax: 25, waterMin: 50, steps: ['Prepare soil', 'Plant crowns', 'Water regularly', 'Harvest after 2 years'] },
        { name: 'Garlic', soil: 'medium', tempMin: 10, tempMax: 20, waterMin: 40, steps: ['Prepare soil', 'Plant cloves', 'Water regularly', 'Harvest after 8 months'] },
        { name: 'Ginger', soil: 'medium', tempMin: 20, tempMax: 30, waterMin: 60, steps: ['Prepare soil', 'Plant rhizomes', 'Water regularly', 'Harvest after 6 months'] },
        { name: 'Chives', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Plant seeds', 'Water regularly', 'Harvest after 3 months'] },
        { name: 'Oregano', soil: 'medium', tempMin: 15, tempMax: 25, waterMin: 30, steps: ['Prepare soil', 'Sow seeds', 'Water sparingly', 'Harvest after 3 months'] },
        { name: 'Basil', soil: 'medium', tempMin: 15, tempMax: 30, waterMin: 40, steps: ['Prepare soil', 'Plant seedlings', 'Water regularly', 'Harvest after 2 months'] },
        { name: 'Mint', soil: 'medium', tempMin: 10, tempMax: 25, waterMin: 40, steps: ['Prepare soil', 'Plant cuttings', 'Water regularly', 'Harvest after 3 months'] },
        // Add more crops as needed up to 100.
    ];
    

    const suitableCrops = crops.filter(crop =>
        crop.soil === soil &&
        temperature >= crop.tempMin &&
        temperature <= crop.tempMax &&
        water >= crop.waterMin
    );

    const resultSection = document.getElementById('result');
    if (suitableCrops.length > 0) {
        const crop = suitableCrops[0];
        document.getElementById('cropName').innerText = crop.name;
        document.getElementById('stepsList').innerHTML = crop.steps.map(step => `<li>${step}</li>`).join('');
    } else {
        document.getElementById('cropName').innerText = 'No suitable crop found.';
        document.getElementById('stepsList').innerHTML = '';
    }

    resultSection.classList.remove('hidden');
});

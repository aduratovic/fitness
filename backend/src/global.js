const enums = {
    //workout type
    type: ['Cardio','Resistance (machines)', 'Weight Training'],
    
    //only for weight training 
    weightTrainingType:['Dumbbell','Barbell'],
    
    //workout names for weight training and resistance machines
    name:['Shoulder','Bicep','Tricep','Chest','Back'],
    
    //exercises
    
    //only for cardio
    cardioExercise: ['Walking', 'Running', 'Treadmil','Stair Climber','Stationary Bike'],
    
    //only for weight training
    weightTrainingDumbbellShoulder:['Shoulder Press', 'Side Raises','Front Raises','Arnold Press'],
    weightTrainingDumbbellBicep:['Bicep Curl','Hammer Curl','Concentrated Curl','Side Curl'],
    weightTrainingDumbbellTricep:['Skullcrusher','Overhead Tricep Extension','Incline Kickback','Single Arm Tricep Kickback'],
    weightTrainingDumbbellChest:['Dumbbell Bench Press','Flat Dumbbell Fly','Incline Dumbbell Bench Press','Incline Dumbbell Fly'],
    weightTrainingDumbbellBack:['Bent Over Row','Chest Supported Row','Reverse Fly','Single Arm Row'],
    weightTrainingBarbellShoulder:['Barbell Front Raises','Barbell Overhead Press', 'Barbell High Pull'],
    weightTrainingBarbellBicep:['EZ Bar Preacher Curl','Barbell Curl','Barbell Drag Curl'],
    weightTrainingBarbellTricep:['Incline Barbell Tricep Extension','Barbell Overhead Tricep Extension','Barbell Skullcrusher'],
    weightTrainingBarbellChest:['Bench Press','Incline Bench Press','Decline Bench Press'],
    weightTrainingBarbellBack:['Bent Over Row','Wide-grip Bent Over Row','Pendlay Row'],

    //only for resistance machines
    resistanceSoulder: ['Shoulder Press Machine', 'Cable Extension Front Raise'],
    resistanceBicep: ['Bicep Curl Machine', 'Cable Extension Bicep Curl'],
    resistanceTricep: ['Tricep Extension Machine', 'Cable Extension Tricep'],
    resistanceChest: ['Flat Chest Press (smith)', 'Butterfly Machine', 'Incline Press (smith)','Decline Press (smith)'],
    resistanceBack: ['Low Seated Row Machine','Back Extension Machine','Cable Extension Lat Pull Down'],
    resistanceLeg: ['Angled Leg Curl','Seated Leg Press','Leg-extension Machine']
}

const exercises = [
    ...enums.cardioExercise,
    ...enums.weightTrainingDumbbellShoulder,
    ...enums.weightTrainingDumbbellBicep,
    ...enums.weightTrainingDumbbellTricep,
    ...enums.weightTrainingDumbbellChest,
    ...enums.weightTrainingDumbbellBack,
    ...enums.weightTrainingBarbellShoulder,
    ...enums.weightTrainingBarbellBicep,
    ...enums.weightTrainingBarbellTricep,
    ...enums.weightTrainingBarbellChest,
    ...enums.weightTrainingBarbellBack,
    ...enums.resistanceSoulder,
    ...enums.resistanceBicep,
    ...enums.resistanceTricep,
    ...enums.resistanceChest,
    ...enums.resistanceBack,
    ...enums.resistanceLeg
]

module.exports = {enums,exercises}
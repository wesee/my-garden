import utils from "../node_modules/decentraland-ecs-utils/index"

const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const bridge_02 = new Entity()
bridge_02.setParent(scene)
const gltfShape = new GLTFShape('models/Bridge_02/Bridge_02.glb')
bridge_02.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(7.5, 0, 5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
bridge_02.addComponentOrReplace(transform_2)
engine.addEntity(bridge_02)

const floorBasePebbles_01 = new Entity()
floorBasePebbles_01.setParent(scene)
const gltfShape_2 = new GLTFShape('models/FloorBasePebbles_01/FloorBasePebbles_01.glb')
floorBasePebbles_01.addComponentOrReplace(gltfShape_2)
const transform_3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBasePebbles_01.addComponentOrReplace(transform_3)
engine.addEntity(floorBasePebbles_01)

const playgroundStructure_01 = new Entity()
playgroundStructure_01.setParent(scene)
const gltfShape_3 = new GLTFShape('models/PlaygroundStructure_01/PlaygroundStructure_01.glb')
playgroundStructure_01.addComponentOrReplace(gltfShape_3)
const transform_4 = new Transform({
  position: new Vector3(6.5, 1, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.5, 1, -0.5)
})
playgroundStructure_01.addComponentOrReplace(transform_4)
engine.addEntity(playgroundStructure_01)

const lampPost_03 = new Entity()
lampPost_03.setParent(scene)
const gltfShape_4 = new GLTFShape('models/LampPost_03/LampPost_03.glb')
lampPost_03.addComponentOrReplace(gltfShape_4)
const transform_5 = new Transform({
  position: new Vector3(5.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lampPost_03.addComponentOrReplace(transform_5)
engine.addEntity(lampPost_03)

const lampPost_03_2 = new Entity()
lampPost_03_2.setParent(scene)
lampPost_03_2.addComponentOrReplace(gltfShape_4)
const transform_6 = new Transform({
  position: new Vector3(7.5, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lampPost_03_2.addComponentOrReplace(transform_6)
engine.addEntity(lampPost_03_2)

const lampPost_03_3 = new Entity()
lampPost_03_3.setParent(scene)
lampPost_03_3.addComponentOrReplace(gltfShape_4)
const transform_7 = new Transform({
  position: new Vector3(5.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lampPost_03_3.addComponentOrReplace(transform_7)
engine.addEntity(lampPost_03_3)

const lampPost_03_4 = new Entity()
lampPost_03_4.setParent(scene)
lampPost_03_4.addComponentOrReplace(gltfShape_4)
const transform_8 = new Transform({
  position: new Vector3(7.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
lampPost_03_4.addComponentOrReplace(transform_8)
engine.addEntity(lampPost_03_4)

const pond_01 = new Entity()
pond_01.setParent(scene)
const gltfShape_5 = new GLTFShape('models/Pond_01/Pond_01.glb')
pond_01.addComponentOrReplace(gltfShape_5)
const transform_9 = new Transform({
  position: new Vector3(8.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 1.5)
})
pond_01.addComponentOrReplace(transform_9)
engine.addEntity(pond_01)

const treePine_01 = new Entity()
treePine_01.setParent(scene)
const gltfShape_6 = new GLTFShape('models/TreePine_01/TreePine_01.glb')
treePine_01.addComponentOrReplace(gltfShape_6)
const transform_10 = new Transform({
  position: new Vector3(9.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01.addComponentOrReplace(transform_10)
engine.addEntity(treePine_01)

const treePine_01_2 = new Entity()
treePine_01_2.setParent(scene)
treePine_01_2.addComponentOrReplace(gltfShape_6)
const transform_11 = new Transform({
  position: new Vector3(2, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_2.addComponentOrReplace(transform_11)
engine.addEntity(treePine_01_2)

const treePine_01_3 = new Entity()
treePine_01_3.setParent(scene)
treePine_01_3.addComponentOrReplace(gltfShape_6)
const transform_12 = new Transform({
  position: new Vector3(5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_3.addComponentOrReplace(transform_12)
engine.addEntity(treePine_01_3)

const treePine_01_4 = new Entity()
treePine_01_4.setParent(scene)
treePine_01_4.addComponentOrReplace(gltfShape_6)
const transform_13 = new Transform({
  position: new Vector3(6.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_4.addComponentOrReplace(transform_13)
engine.addEntity(treePine_01_4)

const treePine_01_5 = new Entity()
treePine_01_5.setParent(scene)
treePine_01_5.addComponentOrReplace(gltfShape_6)
const transform_14 = new Transform({
  position: new Vector3(13.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_5.addComponentOrReplace(transform_14)
engine.addEntity(treePine_01_5)

const treePine_01_6 = new Entity()
treePine_01_6.setParent(scene)
treePine_01_6.addComponentOrReplace(gltfShape_6)
const transform_15 = new Transform({
  position: new Vector3(8, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_6.addComponentOrReplace(transform_15)
engine.addEntity(treePine_01_6)

const treePine_01_7 = new Entity()
treePine_01_7.setParent(scene)
treePine_01_7.addComponentOrReplace(gltfShape_6)
const transform_16 = new Transform({
  position: new Vector3(11, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_7.addComponentOrReplace(transform_16)
engine.addEntity(treePine_01_7)

const log_02 = new Entity()
log_02.setParent(scene)
const gltfShape_7 = new GLTFShape('models/Log_02/Log_02.glb')
log_02.addComponentOrReplace(gltfShape_7)
const transform_17 = new Transform({
  position: new Vector3(13.5, 0, 2),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1.5, 2)
})
log_02.addComponentOrReplace(transform_17)
engine.addEntity(log_02)

const log_02_2 = new Entity()
log_02_2.setParent(scene)
log_02_2.addComponentOrReplace(gltfShape_7)
const transform_18 = new Transform({
  position: new Vector3(2.5, 0, 2),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1.5, 2)
})
log_02_2.addComponentOrReplace(transform_18)
engine.addEntity(log_02_2)

const mushroom_01 = new Entity()
mushroom_01.setParent(scene)
const gltfShape_8 = new GLTFShape('models/Mushroom_01/Mushroom_01.glb')
mushroom_01.addComponentOrReplace(gltfShape_8)
const transform_19 = new Transform({
  position: new Vector3(12.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushroom_01.addComponentOrReplace(transform_19)
engine.addEntity(mushroom_01)

const mushroom_01_2 = new Entity()
mushroom_01_2.setParent(scene)
mushroom_01_2.addComponentOrReplace(gltfShape_8)
const transform_20 = new Transform({
  position: new Vector3(9.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mushroom_01_2.addComponentOrReplace(transform_20)
engine.addEntity(mushroom_01_2)

const mushroom_01_3 = new Entity()
mushroom_01_3.setParent(scene)
mushroom_01_3.addComponentOrReplace(gltfShape_8)
const transform_21 = new Transform({
  position: new Vector3(11, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 4, 2.5)
})
mushroom_01_3.addComponentOrReplace(transform_21)
engine.addEntity(mushroom_01_3)

const mushroom_01_4 = new Entity()
mushroom_01_4.setParent(scene)
mushroom_01_4.addComponentOrReplace(gltfShape_8)
const transform_22 = new Transform({
  position: new Vector3(12, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 4, 2.5)
})
mushroom_01_4.addComponentOrReplace(transform_22)
engine.addEntity(mushroom_01_4)

const mushroom_01_5 = new Entity()
mushroom_01_5.setParent(scene)
mushroom_01_5.addComponentOrReplace(gltfShape_8)
const transform_23 = new Transform({
  position: new Vector3(11.5, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 4, 2.5)
})
mushroom_01_5.addComponentOrReplace(transform_23)
engine.addEntity(mushroom_01_5)

const mushroom_01_6 = new Entity()
mushroom_01_6.setParent(scene)
mushroom_01_6.addComponentOrReplace(gltfShape_8)
const transform_24 = new Transform({
  position: new Vector3(11.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 5, 4)
})
mushroom_01_6.addComponentOrReplace(transform_24)
engine.addEntity(mushroom_01_6)

const mushroom_01_7 = new Entity()
mushroom_01_7.setParent(scene)
mushroom_01_7.addComponentOrReplace(gltfShape_8)
const transform_25 = new Transform({
  position: new Vector3(11, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 4, 2.5)
})
mushroom_01_7.addComponentOrReplace(transform_25)
engine.addEntity(mushroom_01_7)

const rockLargeMoss_01 = new Entity()
rockLargeMoss_01.setParent(scene)
const gltfShape_9 = new GLTFShape('models/RockLargeMoss_01/RockLargeMoss_01.glb')
rockLargeMoss_01.addComponentOrReplace(gltfShape_9)
const transform_26 = new Transform({
  position: new Vector3(10, 0, 8),
  rotation: new Quaternion(0, 0, -0.7730104533627369, 0.6343932841636456),
  scale: new Vector3(0.5, 0.5, 1)
})
rockLargeMoss_01.addComponentOrReplace(transform_26)
engine.addEntity(rockLargeMoss_01)

const flower_04 = new Entity()
flower_04.setParent(scene)
const gltfShape_10 = new GLTFShape('models/Flower_04/Flower_04.glb')
flower_04.addComponentOrReplace(gltfShape_10)
const transform_27 = new Transform({
  position: new Vector3(4.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 3.5, 1)
})
flower_04.addComponentOrReplace(transform_27)
engine.addEntity(flower_04)

const flower_04_2 = new Entity()
flower_04_2.setParent(scene)
flower_04_2.addComponentOrReplace(gltfShape_10)
const transform_28 = new Transform({
  position: new Vector3(3.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 3.5, 1)
})
flower_04_2.addComponentOrReplace(transform_28)
engine.addEntity(flower_04_2)

const flower_04_3 = new Entity()
flower_04_3.setParent(scene)
flower_04_3.addComponentOrReplace(gltfShape_10)
const transform_29 = new Transform({
  position: new Vector3(3, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 3.5, 1)
})
flower_04_3.addComponentOrReplace(transform_29)
engine.addEntity(flower_04_3)

const flower_04_4 = new Entity()
flower_04_4.setParent(scene)
flower_04_4.addComponentOrReplace(gltfShape_10)
const transform_30 = new Transform({
  position: new Vector3(3.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 3.5, 1)
})
flower_04_4.addComponentOrReplace(transform_30)
engine.addEntity(flower_04_4)

const flower_04_5 = new Entity()
flower_04_5.setParent(scene)
flower_04_5.addComponentOrReplace(gltfShape_10)
const transform_31 = new Transform({
  position: new Vector3(3.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 3.5, 1)
})
flower_04_5.addComponentOrReplace(transform_31)
engine.addEntity(flower_04_5)

const flower_03 = new Entity()
flower_03.setParent(scene)
const gltfShape_11 = new GLTFShape('models/Flower_03/Flower_03.glb')
flower_03.addComponentOrReplace(gltfShape_11)
const transform_32 = new Transform({
  position: new Vector3(3.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 4)
})
flower_03.addComponentOrReplace(transform_32)
engine.addEntity(flower_03)

const flower_03_2 = new Entity()
flower_03_2.setParent(scene)
flower_03_2.addComponentOrReplace(gltfShape_11)
const transform_33 = new Transform({
  position: new Vector3(3, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 4)
})
flower_03_2.addComponentOrReplace(transform_33)
engine.addEntity(flower_03_2)

const flower_03_3 = new Entity()
flower_03_3.setParent(scene)
flower_03_3.addComponentOrReplace(gltfShape_11)
const transform_34 = new Transform({
  position: new Vector3(3, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 4)
})
flower_03_3.addComponentOrReplace(transform_34)
engine.addEntity(flower_03_3)

const flower_03_4 = new Entity()
flower_03_4.setParent(scene)
flower_03_4.addComponentOrReplace(gltfShape_11)
const transform_35 = new Transform({
  position: new Vector3(3.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 4)
})
flower_03_4.addComponentOrReplace(transform_35)
engine.addEntity(flower_03_4)

const flower_03_5 = new Entity()
flower_03_5.setParent(scene)
flower_03_5.addComponentOrReplace(gltfShape_11)
const transform_36 = new Transform({
  position: new Vector3(4, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 2, 4)
})
flower_03_5.addComponentOrReplace(transform_36)
engine.addEntity(flower_03_5)

const plantPot_01 = new Entity()
plantPot_01.setParent(scene)
const gltfShape_12 = new GLTFShape('models/PlantPot_01/PlantPot_01.glb')
plantPot_01.addComponentOrReplace(gltfShape_12)
const transform_37 = new Transform({
  position: new Vector3(9.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 1.5, 2)
})
plantPot_01.addComponentOrReplace(transform_37)
engine.addEntity(plantPot_01)

const fencePicketLarge_01 = new Entity()
fencePicketLarge_01.setParent(scene)
const gltfShape_13 = new GLTFShape('models/FencePicketLarge_01/FencePicketLarge_01.glb')
fencePicketLarge_01.addComponentOrReplace(gltfShape_13)
const transform_38 = new Transform({
  position: new Vector3(0.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01.addComponentOrReplace(transform_38)
engine.addEntity(fencePicketLarge_01)

const fencePicketLarge_01_2 = new Entity()
fencePicketLarge_01_2.setParent(scene)
fencePicketLarge_01_2.addComponentOrReplace(gltfShape_13)
const transform_39 = new Transform({
  position: new Vector3(15.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_2.addComponentOrReplace(transform_39)
engine.addEntity(fencePicketLarge_01_2)

const fencePicketLarge_01_3 = new Entity()
fencePicketLarge_01_3.setParent(scene)
fencePicketLarge_01_3.addComponentOrReplace(gltfShape_13)
const transform_40 = new Transform({
  position: new Vector3(15.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_3.addComponentOrReplace(transform_40)
engine.addEntity(fencePicketLarge_01_3)

const fencePicketLarge_01_4 = new Entity()
fencePicketLarge_01_4.setParent(scene)
fencePicketLarge_01_4.addComponentOrReplace(gltfShape_13)
const transform_41 = new Transform({
  position: new Vector3(12.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_4.addComponentOrReplace(transform_41)
engine.addEntity(fencePicketLarge_01_4)

const fencePicketLarge_01_5 = new Entity()
fencePicketLarge_01_5.setParent(scene)
fencePicketLarge_01_5.addComponentOrReplace(gltfShape_13)
const transform_42 = new Transform({
  position: new Vector3(0.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_5.addComponentOrReplace(transform_42)
engine.addEntity(fencePicketLarge_01_5)

const fencePicketLarge_01_6 = new Entity()
fencePicketLarge_01_6.setParent(scene)
fencePicketLarge_01_6.addComponentOrReplace(gltfShape_13)
const transform_43 = new Transform({
  position: new Vector3(0.5, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_6.addComponentOrReplace(transform_43)
engine.addEntity(fencePicketLarge_01_6)

const fencePicketLarge_01_7 = new Entity()
fencePicketLarge_01_7.setParent(scene)
fencePicketLarge_01_7.addComponentOrReplace(gltfShape_13)
const transform_44 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_7.addComponentOrReplace(transform_44)
engine.addEntity(fencePicketLarge_01_7)

const fencePicketLarge_01_8 = new Entity()
fencePicketLarge_01_8.setParent(scene)
fencePicketLarge_01_8.addComponentOrReplace(gltfShape_13)
const transform_45 = new Transform({
  position: new Vector3(15.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_8.addComponentOrReplace(transform_45)
engine.addEntity(fencePicketLarge_01_8)

const fencePicketLarge_01_9 = new Entity()
fencePicketLarge_01_9.setParent(scene)
fencePicketLarge_01_9.addComponentOrReplace(gltfShape_13)
const transform_46 = new Transform({
  position: new Vector3(5.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
fencePicketLarge_01_9.addComponentOrReplace(transform_46)
engine.addEntity(fencePicketLarge_01_9)

const fenceWoodDoor_01 = new Entity()
fenceWoodDoor_01.setParent(scene)
const gltfShape_14 = new GLTFShape('models/FenceWoodDoor_01/FenceWoodDoor_01.glb')
fenceWoodDoor_01.addComponentOrReplace(gltfShape_14)
const transform_47 = new Transform({
  position: new Vector3(7.5, 0, 15.5),
  // rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(1, 1, 2)
})
fenceWoodDoor_01.addComponentOrReplace(transform_47)
engine.addEntity(fenceWoodDoor_01)


// Define start and end rotations for the gate
let startRot = Quaternion.Euler(0, 90, 0)
let endRot = Quaternion.Euler(0, 0, 0)

// Toggle gate to its open / close positions
fenceWoodDoor_01.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      // log("Open")
      fenceWoodDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(startRot, endRot, 0.5)
      )    
    } else {
      // log("Close")
      fenceWoodDoor_01.addComponentOrReplace(
        new utils.RotateTransformComponent(endRot, startRot, 0.5)
      )
    }
  })
)

// Listen for click on the gate and toggle its state
fenceWoodDoor_01.addComponent(
  // new OnClick(event => {
  //   fenceWoodDoor_01.getComponent(utils.ToggleComponent).toggle()
  // })

  new OnClick(event => {
    // Adding an intermediate variable
    let doorRotY = fenceWoodDoor_01.getComponent(Transform).rotation.y
 
    // Check if gate is at its start or end positions before toggling
    if (doorRotY == startRot.y || doorRotY == endRot.y)
    fenceWoodDoor_01.getComponent(utils.ToggleComponent).toggle()
  })
)

const bicycle_01 = new Entity()
bicycle_01.setParent(scene)
const gltfShape_15 = new GLTFShape('models/Bicycle_01/Bicycle_01.glb')
bicycle_01.addComponentOrReplace(gltfShape_15)
const transform_48 = new Transform({
  position: new Vector3(2, 0, 3.5),
  rotation: new Quaternion(-0.2384859350433317, 0.1880900857622464, 0.028452873945971957, 0.9523324064572589),
  scale: new Vector3(1.5, 1.5, 1)
})
bicycle_01.addComponentOrReplace(transform_48)
engine.addEntity(bicycle_01)

const treePine_01_8 = new Entity()
treePine_01_8.setParent(scene)
treePine_01_8.addComponentOrReplace(gltfShape_6)
const transform_49 = new Transform({
  position: new Vector3(12.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_8.addComponentOrReplace(transform_49)
engine.addEntity(treePine_01_8)

const treePine_01_9 = new Entity()
treePine_01_9.setParent(scene)
treePine_01_9.addComponentOrReplace(gltfShape_6)
const transform_50 = new Transform({
  position: new Vector3(3.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
treePine_01_9.addComponentOrReplace(transform_50)
engine.addEntity(treePine_01_9)

const sign_01 = new Entity()
sign_01.setParent(scene)
const gltfShape_16 = new GLTFShape('models/Sign_01/Sign_01.glb')
sign_01.addComponentOrReplace(gltfShape_16)
const transform_51 = new Transform({
  position: new Vector3(15, 0, 14),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1.5, 1.5, 1.5)
})
sign_01.addComponentOrReplace(transform_51)
engine.addEntity(sign_01)

const bush_02 = new Entity()
bush_02.setParent(scene)
const gltfShape_17 = new GLTFShape('models/Bush_02/Bush_02.glb')
bush_02.addComponentOrReplace(gltfShape_17)
const transform_52 = new Transform({
  position: new Vector3(14.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush_02.addComponentOrReplace(transform_52)
engine.addEntity(bush_02)

const bushPatch_02 = new Entity()
bushPatch_02.setParent(scene)
const gltfShape_18 = new GLTFShape('models/BushPatch_02/BushPatch_02.glb')
bushPatch_02.addComponentOrReplace(gltfShape_18)
const transform_53 = new Transform({
  position: new Vector3(15.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02.addComponentOrReplace(transform_53)
engine.addEntity(bushPatch_02)

const bushPatch_02_2 = new Entity()
bushPatch_02_2.setParent(scene)
bushPatch_02_2.addComponentOrReplace(gltfShape_18)
const transform_54 = new Transform({
  position: new Vector3(0.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_2.addComponentOrReplace(transform_54)
engine.addEntity(bushPatch_02_2)

const bushPatch_02_3 = new Entity()
bushPatch_02_3.setParent(scene)
bushPatch_02_3.addComponentOrReplace(gltfShape_18)
const transform_55 = new Transform({
  position: new Vector3(15.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_3.addComponentOrReplace(transform_55)
engine.addEntity(bushPatch_02_3)

const bushPatch_02_4 = new Entity()
bushPatch_02_4.setParent(scene)
bushPatch_02_4.addComponentOrReplace(gltfShape_18)
const transform_56 = new Transform({
  position: new Vector3(2.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_4.addComponentOrReplace(transform_56)
engine.addEntity(bushPatch_02_4)

const bushPatch_02_5 = new Entity()
bushPatch_02_5.setParent(scene)
bushPatch_02_5.addComponentOrReplace(gltfShape_18)
const transform_57 = new Transform({
  position: new Vector3(15.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_5.addComponentOrReplace(transform_57)
engine.addEntity(bushPatch_02_5)

const bushPatch_02_6 = new Entity()
bushPatch_02_6.setParent(scene)
bushPatch_02_6.addComponentOrReplace(gltfShape_18)
const transform_58 = new Transform({
  position: new Vector3(0.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_6.addComponentOrReplace(transform_58)
engine.addEntity(bushPatch_02_6)

const bushPatch_02_7 = new Entity()
bushPatch_02_7.setParent(scene)
bushPatch_02_7.addComponentOrReplace(gltfShape_18)
const transform_59 = new Transform({
  position: new Vector3(0.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_7.addComponentOrReplace(transform_59)
engine.addEntity(bushPatch_02_7)

const bushPatch_02_8 = new Entity()
bushPatch_02_8.setParent(scene)
bushPatch_02_8.addComponentOrReplace(gltfShape_18)
const transform_60 = new Transform({
  position: new Vector3(0.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_8.addComponentOrReplace(transform_60)
engine.addEntity(bushPatch_02_8)

const bushPatch_02_9 = new Entity()
bushPatch_02_9.setParent(scene)
bushPatch_02_9.addComponentOrReplace(gltfShape_18)
const transform_61 = new Transform({
  position: new Vector3(15.5, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_9.addComponentOrReplace(transform_61)
engine.addEntity(bushPatch_02_9)

const bushPatch_02_10 = new Entity()
bushPatch_02_10.setParent(scene)
bushPatch_02_10.addComponentOrReplace(gltfShape_18)
const transform_62 = new Transform({
  position: new Vector3(13.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_10.addComponentOrReplace(transform_62)
engine.addEntity(bushPatch_02_10)

const bushPatch_02_11 = new Entity()
bushPatch_02_11.setParent(scene)
bushPatch_02_11.addComponentOrReplace(gltfShape_18)
const transform_63 = new Transform({
  position: new Vector3(9.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_11.addComponentOrReplace(transform_63)
engine.addEntity(bushPatch_02_11)

const bushPatch_02_12 = new Entity()
bushPatch_02_12.setParent(scene)
bushPatch_02_12.addComponentOrReplace(gltfShape_18)
const transform_64 = new Transform({
  position: new Vector3(3.5, 0, 15.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
bushPatch_02_12.addComponentOrReplace(transform_64)
engine.addEntity(bushPatch_02_12)

const plant_07 = new Entity()
plant_07.setParent(scene)
const gltfShape_19 = new GLTFShape('models/Plant_07/Plant_07.glb')
plant_07.addComponentOrReplace(gltfShape_19)
const transform_65 = new Transform({
  position: new Vector3(13.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07.addComponentOrReplace(transform_65)
engine.addEntity(plant_07)

const plant_07_2 = new Entity()
plant_07_2.setParent(scene)
plant_07_2.addComponentOrReplace(gltfShape_19)
const transform_66 = new Transform({
  position: new Vector3(13, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07_2.addComponentOrReplace(transform_66)
engine.addEntity(plant_07_2)

const plant_07_3 = new Entity()
plant_07_3.setParent(scene)
plant_07_3.addComponentOrReplace(gltfShape_19)
const transform_67 = new Transform({
  position: new Vector3(12.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07_3.addComponentOrReplace(transform_67)
engine.addEntity(plant_07_3)

const plant_07_4 = new Entity()
plant_07_4.setParent(scene)
plant_07_4.addComponentOrReplace(gltfShape_19)
const transform_68 = new Transform({
  position: new Vector3(13, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07_4.addComponentOrReplace(transform_68)
engine.addEntity(plant_07_4)

const plant_07_5 = new Entity()
plant_07_5.setParent(scene)
plant_07_5.addComponentOrReplace(gltfShape_19)
const transform_69 = new Transform({
  position: new Vector3(12.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07_5.addComponentOrReplace(transform_69)
engine.addEntity(plant_07_5)

const plant_07_6 = new Entity()
plant_07_6.setParent(scene)
plant_07_6.addComponentOrReplace(gltfShape_19)
const transform_70 = new Transform({
  position: new Vector3(13.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 3, 3)
})
plant_07_6.addComponentOrReplace(transform_70)
engine.addEntity(plant_07_6)
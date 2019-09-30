# My Garden - v1
### _First try with Builder_

The [Builder](https://builder.decentraland.org) provides an easy way for anyone to design a scene within Decentraland.

## Before you start

Please make sure you have the latest version of the Decentraland SDK installed by running the following command in the terminal:

```
npm install -g decentraland
```

## Running the scene

Inside the terminal, run the following command to rn the scene: 

```
dcl start
```

This will install any missing dependencies and automatically open your default browser to preview the scene. This might take a few seconds to load but once done, you should see a pavilion situated in a small garden that's surrounded by wooden fences.

![screenshot](../screenshots/my_garden_01.png)

As mentioned earlier, users can't access the garden without having to jump over the fence so our aim is to have the door open and close whenever the user clicks on it.

## References

- Adding Functionality to a Builder Scene (https://github.com/takJohn/adding-functionality-to-a-builder-scene)
- Decentraland's Builder (https://builder.decentraland.org/)
- Decentraland's Utils library (https://github.com/decentraland/decentraland-ecs-utils)
- Installation guide for Decentraland's CLI and SDK (https://docs.decentraland.org/getting-started/installation-guide/)
- Setting entity positions (https://docs.decentraland.org/development-guide/entity-positioning/)
- Documentation for Decentraland's SDK (https://docs.decentraland.org)

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
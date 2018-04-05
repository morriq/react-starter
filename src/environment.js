const setGateway = gateway => ({ gateway });
const setStage = stage => ({
  stage,
  production: stage === 'production'
});

const environmentSetup = ({ gateway, stage }) => ({
  ...setGateway(gateway),
  ...setStage(stage)
});

export default environmentSetup({
  gateway: process.env.GATEWAY,
  stage: process.env.STAGE
});

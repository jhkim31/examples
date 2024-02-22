import yaml # pip install pyyaml

# .yaml => Dict
ymlStr = ''

with open('../test.yaml', 'r') as f:
    ymlStr = yaml.load(f, Loader=yaml.FullLoader)
    print(ymlStr)

# Dict => .yaml
with open('../test.yaml', 'w') as f:
    ymlStr['test'] = 'test!'
    yaml.dump(ymlStr, f)

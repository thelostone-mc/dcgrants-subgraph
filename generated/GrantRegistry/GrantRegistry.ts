// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewGrant extends ethereum.Event {
  get params(): NewGrant__Params {
    return new NewGrant__Params(this);
  }
}

export class NewGrant__Params {
  _event: NewGrant;

  constructor(event: NewGrant) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _payout(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _replaces(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class GrantRegistry__grantsResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: string;
  value4: i32;
  value5: Bytes;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: Address,
    value3: string,
    value4: i32,
    value5: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    return map;
  }
}

export class GrantRegistry extends ethereum.SmartContract {
  static bind(address: Address): GrantRegistry {
    return new GrantRegistry("GrantRegistry", address);
  }

  grantCount(): BigInt {
    let result = super.call("grantCount", "grantCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_grantCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("grantCount", "grantCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  grantRegistryId(): Bytes {
    let result = super.call(
      "grantRegistryId",
      "grantRegistryId():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_grantRegistryId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "grantRegistryId",
      "grantRegistryId():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  grants(param0: Bytes): GrantRegistry__grantsResult {
    let result = super.call(
      "grants",
      "grants(bytes32):(bytes32,address,address,string,uint8,bytes32)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new GrantRegistry__grantsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toString(),
      result[4].toI32(),
      result[5].toBytes()
    );
  }

  try_grants(param0: Bytes): ethereum.CallResult<GrantRegistry__grantsResult> {
    let result = super.tryCall(
      "grants",
      "grants(bytes32):(bytes32,address,address,string,uint8,bytes32)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GrantRegistry__grantsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toString(),
        value[4].toI32(),
        value[5].toBytes()
      )
    );
  }

  metaPtr(): string {
    let result = super.call("metaPtr", "metaPtr():(string)", []);

    return result[0].toString();
  }

  try_metaPtr(): ethereum.CallResult<string> {
    let result = super.tryCall("metaPtr", "metaPtr():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isConfig(_id: Bytes): boolean {
    let result = super.call("isConfig", "isConfig(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);

    return result[0].toBoolean();
  }

  try_isConfig(_id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isConfig", "isConfig(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isActive(_id: Bytes): boolean {
    let result = super.call("isActive", "isActive(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);

    return result[0].toBoolean();
  }

  try_isActive(_id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isActive", "isActive(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isClosed(_id: Bytes): boolean {
    let result = super.call("isClosed", "isClosed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);

    return result[0].toBoolean();
  }

  try_isClosed(_id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isClosed", "isClosed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getGrantCount(): BigInt {
    let result = super.call("getGrantCount", "getGrantCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getGrantCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGrantCount",
      "getGrantCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _grantRegistryId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _metaPtr(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ActivateCall extends ethereum.Call {
  get inputs(): ActivateCall__Inputs {
    return new ActivateCall__Inputs(this);
  }

  get outputs(): ActivateCall__Outputs {
    return new ActivateCall__Outputs(this);
  }
}

export class ActivateCall__Inputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ActivateCall__Outputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class ClosedCall extends ethereum.Call {
  get inputs(): ClosedCall__Inputs {
    return new ClosedCall__Inputs(this);
  }

  get outputs(): ClosedCall__Outputs {
    return new ClosedCall__Outputs(this);
  }
}

export class ClosedCall__Inputs {
  _call: ClosedCall;

  constructor(call: ClosedCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ClosedCall__Outputs {
  _call: ClosedCall;

  constructor(call: ClosedCall) {
    this._call = call;
  }
}

export class _mintCall extends ethereum.Call {
  get inputs(): _mintCall__Inputs {
    return new _mintCall__Inputs(this);
  }

  get outputs(): _mintCall__Outputs {
    return new _mintCall__Outputs(this);
  }
}

export class _mintCall__Inputs {
  _call: _mintCall;

  constructor(call: _mintCall) {
    this._call = call;
  }

  get _id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _payout(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _metaPtr(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _state(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get _replaces(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class _mintCall__Outputs {
  _call: _mintCall;

  constructor(call: _mintCall) {
    this._call = call;
  }
}

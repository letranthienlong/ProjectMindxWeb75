import React from 'react'
import {
    SearchOutlined
} from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, variant,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = '#fff',
        borderRadius = '0',
        border = 'none' } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                variant={variant}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: borderRadius
                }}
            />
            <ButtonComponent
                size={size}
                styleButton={{
                    background: backgroundColorButton,
                    borderRadius: borderRadius,
                    border: border
                }}
                icon={< SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            >
            </ButtonComponent>
        </div >
    )
}

export default ButtonInputSearch